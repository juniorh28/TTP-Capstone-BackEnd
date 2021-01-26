const Sequelize = require('sequelize');
const { name } = require('../package.json');

// Initialize database with Sequelize
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${name}`,
  {
    logging: false,
  }
);

module.exports = db;
