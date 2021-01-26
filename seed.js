const db = require("./db");
const Players = require("./db/models").Player;
const Places = require("./db/models").Place;

const seedPlayers = [
  { firstName: "Bilbo", lastName: "Baggins", jerseyNumber: 11 },
  { firstName: "Harry", lastName: "Potter", jerseyNumber: 22 },
  { firstName: "Lucifer", lastName: "Morningstart", jerseyNumber: 666 },
];

//some dummy data to seed the places table
const seedPlaces = [
  {
    name: "Starbucks",
    description: "Coffee spot",
    address: "1600 Sheepshead Bay Rd",
    category: "food",
    borough: "brooklyn",
    numOfLikes: 0,
  },
  {
    name: "Starbucks",
    description: "Take out only, can't eat inside",
    address: "375 Pearl St, New York, NY 10038",
    category: "food",
    borough: "manhattan",
    numOfLikes: 2,
  },
  {
    name: "MoMA",
    description: "Museum of Modern Art",
    address: "11 W 53rd St, New York, NY 10019",
    category: "art",
    borough: "manhattan",
    numOfLikes: 15,
  },
];

//seed with places dummy data
const seedPlc = () => {
  return Places.bulkCreate(seedPlaces);
};

const seed = () => {
  return Players.bulkCreate(seedPlayers);
};

seedPlc().then(() => process.exit());
