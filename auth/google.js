const passport = require('passport')
const cookieSession = require("cookie-session");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
//need user model
const model = require('../db/models/user')
const router = require('express').Router



if(!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET){
    console.log("GOOGLE ID/SECRET NOT FOUND")
}
else{
    let googleConfig = {
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:process.env.GOOGLE_CALLBACK
    }
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
    .then(([user]) =>{done(null,user)})
    .catch(done)
})

passport.use(strategy);



//Route for authenticating
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
  ,(req,res,next) =>{
    res.send(req.user)    
  });


//Route for callback
router.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
// Successful authentication, redirect home.
res.redirect('/');
});






  //create a cookie and store it in users browser
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  //server will take cookie identify it as the user
  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });
  

  
  router.use(passport.initialize());
  router.use(passport.session());
  