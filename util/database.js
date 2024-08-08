const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_sequelize", "root", "123canon!", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
