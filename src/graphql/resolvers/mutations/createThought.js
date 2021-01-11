const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newThought = await models.Thought.create(input);
    return newThought
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};