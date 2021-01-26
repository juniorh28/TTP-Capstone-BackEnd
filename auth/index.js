const { Router } = require("express")


//Post Sign up
//Post logout
//get user


Router.use("/google", require('./google'))

//Post login
Router.post('/login',
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login' }));

