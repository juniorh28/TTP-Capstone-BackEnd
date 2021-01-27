const Sequelize = require("sequelize");
const db = require("../db");

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
  //if we choose to have upvote feature, the number of votes will be stored here
  numOfLikes: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
});

module.exports = Place;
