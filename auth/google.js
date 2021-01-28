const passport = require('passport')
const cookieSession = require("cookie-session");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
//need user model
require('dotenv').config()//required
const model = require('../db/models/user')
const router = require('express').Router()

if(!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET){
    console.log("GOOGLE ID/SECRET NOT FOUND")
}else{
    const googleConfig = {
      clientID:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:process.env.GOOGLE_CALLBACK
    }

  let strategy = new GoogleStrategy(googleConfig, (token,refreshToken,profile,done)=>{
      const googleId = profile.id
      const email = profile.emails[0].value
      const imgUrl = profile.photos[0].value
      const firstName = profile.name.givenName
      const lastName = profile.name.familyName
      const fullName = profile.displayName
      User.findOrCreate({
          where:{googleId},
          default:{email,imgUrl,firstName,lastName,fullName}
        })
      .then(([user]) =>{
        done(null,user)
      })
      .catch(done)
  })

  passport.use(strategy);



  //Route for authenticating
  router.get('/', 
    passport.authenticate('google', { scope: ['email','profile'] }));


  //Route for callback
  router.get('/callback', 
  passport.authenticate('google', { 
      failureRedirect: '/login', 
      successRedirect:'/home'
    })
  )
}

module.exports = router