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
  {
    name: "Queens Museum",
    description:
      "Visual arts on display along with The Panorama, a building-for-building model of New York City.",
    address: "New York City Building, Corona, NY 11368",
    category: "art",
    borough: "queens",
    numOfLikes: 7,
  },
  {
    name: "Eibs Pond Park",
    description:
      "Protected wetland area harboring many plant & wildlife species, particularly birds.",
    address: "Hanover Ave, Staten Island, NY 10304",
    category: "parks",
    borough: "statenisland",
    numOfLikes: 1,
  },
];

module.exports = seedPlaces;
