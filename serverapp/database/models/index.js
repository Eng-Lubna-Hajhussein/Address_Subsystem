const { DATABASE, USER, PASSWORD, HOST, DIALECT } = require("../config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Region = require("./Region/Region")(sequelize, Sequelize.DataTypes);

module.exports = db;