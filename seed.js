const db = require('./db');
/* const Players = require('./db/models').Player; */
const Users = require('./db/models').User;

/* const seedPlayers = [
  { firstName: 'Bilbo', lastName: 'Baggins', jerseyNumber: 11 },
  { firstName: 'Harry', lastName: 'Potter', jerseyNumber: 22 },
  { firstName: 'Lucifer', lastName: 'Morningstart', jerseyNumber: 666 },
]; */

const seedUsers = [
  { firstName: 'John', lastName: 'Snow', email: 'mahQueen@email.com', img:null, password:'123',  googleID:null },
  { firstName: 'Joe', lastName: 'Exotic', email: 'tigerKing@email.com', img:null, password:'321', googleID:null },
  { firstName: 'Bill', lastName: 'Gates', email: 'xbox@hotmail.com', img:null, password:'GillBate',googleID:null },
];

/* const seed = () => {
  return Players.bulkCreate(seedPlayers);
};
 */
const seed = () => {
  return Users.bulkCreate(seedUsers);
};


seed().then(() => process.exit());
