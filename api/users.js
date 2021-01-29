const express = require('express');
const router = express.Router();
require('express').Router
const { User } = require('../db/models');
const bcrypt = require('bcrypt')

// Express Routes for Users - Read more on routing at https://expressjs.com/en/guide/routing.html
router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    // An if/ternary statement to handle not finding allUsers explicitly
    !allUsers
      ? res.status(404).send('Users Listing Not Found')
      : res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
    try {
      let { email, password } = req.body;
      console.log(email,password)
      const emailSearch = req.body.email
      const passwordSearch = req.body.password
      /* const allUsers = await User.findAll( */
      const allUsers = await User.findAll({
          where:{emailSearch, passwordSearch}
      });
      // An if/ternary statement to handle not finding allUsers explicitly
      !allUsers
        ? res.status(404).send('User Not Found')
        : res.status(200).json(allUsers);
    } catch (error) {
      next(error);
    }
  });
  


router.post("/register", async (req, res, next) => {
    try {
        let { firstName, lastName, email, password, img, googleID } = req.body;
        console.log({
            firstName, 
            lastName, 
            email, 
            password, 
            img, 
            googleID
        })
      console.log("password before hashing ",req.body.password)
      //Salt will generate unique args amount of random character in front of hash to prevent brute force entry
      const salt = bcrypt.genSalt(13)
      const hashedPassword = await bcrypt.hash(salt+req.body.password, 13)
      console.log(hashedPassword)
      let newUser = await User.create(req.body);//need to update with hashedPassword
      newUser.update({
          password:hashedPassword
      })
      newUser.save()


      console.log("unhashedPassword", req.body.password)
      console.log("hashedPassword", newUser.password)
      res.status(201).send(newUser);
    } catch (error) {
      res.send({ error: error });
      next(error);
    }
  })

  router.put('/edit', async (req,res,next) => {
      try {
          let updateUser = await User.update(req.body)
      } catch (error) {
          
      }
  })



// Export our router, so that it can be imported to construct our api routes
module.exports = router;
