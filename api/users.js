const express = require("express");
const router = express.Router();
require("express").Router;
const { User } = require("../db/models");

// Express Routes for Users - Read more on routing at https://expressjs.com/en/guide/routing.html
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findAll({
        attributes:['id','email']
    });
    res.json(user)
  } catch (error) {
    next(error);
  }
});




// Export our router, so that it can be imported to construct our api routes
module.exports = router;
