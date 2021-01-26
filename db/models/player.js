const Sequelize = require('sequelize');
const db = require('../db');

//Sample Model  Read More At https://sequelize.org/master/manual/model-basics.html

const Player = db.define('player', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  jerseyNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Player;
