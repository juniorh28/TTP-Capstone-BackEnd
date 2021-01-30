const Sequelize = require('sequelize');
require('dotenv').config()//required

// Initialize database with Sequelize
/* const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${name}`,
  {
    logging: false,
  }
);
 */

const db = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});

try {
  db.authenticate();
  console.log("DB loaded successfully");
} catch (e) {
  console.error(e);
}

 
module.exports = db;

