const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {
  
  const deleteThought = await models.Thought.deleteOne({_id: id})

  if(deleteThought.deletedCount) return{id: id}

  else throw new ApolloError(`Failed to delete address.`);

};
