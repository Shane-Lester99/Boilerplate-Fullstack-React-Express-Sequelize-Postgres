const Sequelize = require('sequelize');
const db = new Sequelize("postgres://postgres:p@localhost/college");

module.exports = db;
