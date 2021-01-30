const express = require("express");
const router = express.Router();
const { Place } = require("../db/models");

// Express Routes for Places

//localhost:8080/api/places
//returns all places in the database
router.get("/", async (req, res, next) => {
  try {
    const allPlaces = await Place.findAll();
    // An if/ternary statement to handle not finding explicitly
    !allPlaces
      ? res.status(404).send("Places Listing Not Found")
      : res.status(200).json(allPlaces);
  } catch (error) {
    next(error);
  }
});

//localhost:8080/api/places/boroughs/:id
//id is brooklyn/queens/manhattan/etc
//returns places in the database filtered by borough
router.get("/boroughs/:id", async (req, res, next) => {
  try {
    const placesById = await Place.findAll({
      where: {
        borough: req.params.id,
      },
    });
    // An if/ternary statement to handle not finding explicitly
    !placesById
      ? res.status(404).send("Places Listing Not Found")
      : res.status(200).json(placesById);
  } catch (error) {
    next(error);
  }
});

//localhost:8080/api/places/categories/:id
//id is food/art/park
//returns places in the database filtered by category
router.get("/categories/:id", async (req, res, next) => {
  try {
    const placesById = await Place.findAll({
      where: {
        category: req.params.id,
      },
    });
    // An if/ternary statement to handle not finding explicitly
    !placesById
      ? res.status(404).send("Places Listing Not Found")
      : res.status(200).json(placesById);
  } catch (error) {
    next(error);
  }
});

//localhost:8080/api/places/all/:id
//id is the primary key in the database
//returns single place in the database by its id
router.get("/all/:id", async (req, res, next) => {
  try {
    const singlePlaceById = await Place.findByPk(req.params.id);
    // An if/ternary statement to handle not finding explicitly
    !singlePlaceById
      ? res.status(404).send("Places Listing Not Found")
      : res.status(200).json(singlePlaceById);
  } catch (error) {
    next(error);
  }
});

//localhost:8080/api/places/newPlace
//adds a new place to the database
router.post("/newPlace", async (req, res, next) => {
  console.log("reqbody", req.body);
  try {
    let newPlace = await Place.create(req.body);
    res.status(201).send(newPlace);
  } catch (error) {
    res.send({ error: error });
    next(error);
  }
});

//localhost:8080/api/places/editPlace/:id
//edits a place for likes, adds 1 to numOfLikes, id is the pk of the place
router.put("/editLikes/:id", async (req, res, next) => {
  try {
    console.log("id", req.params.id);
    let placeToEdit = await Place.findByPk(req.params.id);
    await placeToEdit.update({ numOfLikes: placeToEdit.numOfLikes + 1 });
    res.status(201).send(placeToEdit);
  } catch (error) {
    next(error);
  }
});

//localhost:8080/api/places/addComment/:id
//adds new comment to the place
router.put("/addComment/:id", async (req, res, next) => {
  try {
    console.log(req.body);
    let placeToEdit = await Place.findByPk(req.params.id);
    placeToEdit.update({ comments: req.body });
    res.status(201).send(placeToEdit);
  } catch (error) {
    next(error);
  }
});

// Export our router, so that it can be imported to construct our api routes
module.exports = router;
