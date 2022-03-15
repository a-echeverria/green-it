const Sequelize = require("sequelize");

const connection = new Sequelize(process.env.DATABASE_URL, {});

connection.authenticate();

module.exports = connection;
