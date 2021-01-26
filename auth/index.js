const { Router } = require("express")

//Post login
//Post SIgn up
//Post logout
//get user


Router.use("/google", require('./google'))
Router.post('/login',
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login' }));