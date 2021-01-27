const { Router } = require("express")



//Post logout
Router.post('/',(req,res)=>{
    res.send("bye users")
})


//Post Sign up
Router.post('/sign-Up',(req,res)=>{
    res.send("sending Info")
})

//get user
Router.get('/',(req,res)=>{
    res.send("got all users")
})


//Post login
Router.post('/login',
    passport.authenticate('google', { successRedirect: '/',
        failureRedirect: '/login' }));

