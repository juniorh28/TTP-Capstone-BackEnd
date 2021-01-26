const Sequelize = require("sequelize");
const db = require("../db");

//Sample Model  Read More At https://sequelize.org/master/manual/model-basics.html

const Place = db.define("place", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  borough: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numOfLikes: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
});

module.exports = Place;
