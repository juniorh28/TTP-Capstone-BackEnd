const { Sequelize } = require('sequelize');
require('dotenv').config();

sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
});

const testDatabase = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.error('Unable to connect', err);
    }
}

testDatabase();

module.exports = { sequelize };
