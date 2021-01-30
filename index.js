//NODE MODULES
const express = require('express');
const session = require('express-session')
const cors = require('cors');
const path = require('path');
const passport = require('passport')
const sequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db');
const User = require('./db/models/user')
require('dotenv').config()//required

const sessionsStore = new sequelizeStore({db})

//IMPORTS/VARIABLES
const PORT = process.env.PORT;


const app = express();

//CORS!
app.use(cors());

app.use(express.json());

//Mount on API
app.use('/api', require('./api'));
app.use('/auth',require('./auth'))

//START BACKEND SERVER FUNCTIOON
const serverRun = () => {
  const server = app.listen(PORT, () => {
    console.log(`Live on port : ${PORT}`);
  });
};
//DB Sync Function
//Optional parameters
// {force:true} - drops current tables and places new empty tables
//{alter:true} - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

const syncDb = () => db.sequelize.sync();
// Connects to //postgres://localhost:5432/dbname

//Run server and sync DB
syncDb();
serverRun();

module.exports = app;
