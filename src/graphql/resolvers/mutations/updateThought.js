const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const thoughtToUpdate = await models.Thought.findOne({_id: id});

    if(!thoughtToUpdate) throw new ApolloError(`Could not find Thought with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      thoughtToUpdate[value] = input[value];
    });

    const updatedThought = await thoughtToUpdate.save();

    return updatedThought
  }
  catch(e){
    throw new ApolloError(e)
  }
};