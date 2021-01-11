const { filter } = require("../../types");

module.exports = async (_, {}, {models}) => {
    return await models.Thought.find();
  };