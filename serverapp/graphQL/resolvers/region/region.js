const { models } = require("../../../database/models");
const { Region } = models;

module.exports = {
  // QUERY--------------------------------------------------------------------------------
  findRegions: async (_) => {
    //_ = parent
    try {
      return await Region.findAll();
    } catch (err) {
      throw err;
    }
  },
  // MUTATION--------------------------------------------------------------------------------
  //CREATE
  createRegion: async (parent, { strName, PID = 0 }) => {
    //0 => root id
    try {
      return await Region.create({ strName, PID });
    } catch (err) {
      throw err;
    }
  },
  //UPDATE
  updateRegion: async (_, { ID, strName }) => {
    try {
      const updatedRegion = await Region.update({ strName }, { where: { ID } });
      if (!updatedRegion[0]) {
        throw new Error("No rows have been effected.");
      } else {
        return await Region.findByPk(ID);
      }
    } catch (err) {
      throw err;
    }
  },
};