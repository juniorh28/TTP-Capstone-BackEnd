const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email:{
        type:Sequelize.STRING,
        allowNull: false
    },

    img:{
        type:Sequelize.STRING,
    },

    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    
    googleID:{
        type:Sequelize.STRING,
    }
})
  
  module.exports = User;
  