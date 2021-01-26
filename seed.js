const db = require("./db");
const Players = require("./db/models").Player;
const Places = require("./db/models").Place;

//import file with dummydata
const seedPlaces = require("./dummydata");

const seedPlayers = [
  { firstName: "Bilbo", lastName: "Baggins", jerseyNumber: 11 },
  { firstName: "Harry", lastName: "Potter", jerseyNumber: 22 },
  { firstName: "Lucifer", lastName: "Morningstart", jerseyNumber: 666 },
];

//seed with places dummy data
const seedPlc = () => {
  return Places.bulkCreate(seedPlaces);
};

const seed = () => {
  return Players.bulkCreate(seedPlayers);
};

seedPlc().then(() => process.exit());
