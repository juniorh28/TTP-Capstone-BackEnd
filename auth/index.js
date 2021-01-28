const router = require("express").Router()
const User = require('../db/models/user.js')
const bcrypt = require('bcrypt')

//Post logout
router.post('/logout',(req,res,next)=>{
 try {   
    req.logout();
    req.session.destory()
}catch (error) {
    next(error)
    }
})


//Post register
router.post('/register',async (req,res,next)=>{
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        res.send({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            password:hashedPassword,
            email:req.body.email,
            img:req.body.img,
            googleID:req.body.googleID
        })
        res.status(201).send()
    } catch (error) {
        next(error)
    }
    
})

//get user
router.get('/user',(req,res,next)=>{
    try {

        res.send("got all users") 
    } catch (error) {
       next(error) 
    } 
})

router.post('/login', async (req,res,next) =>{
    try {
         const user = await User.findOne({
             where:{
                email: req.body.email 
             }
         })

         if(!user){
             console.log("user not found",req.body.email)
             res.send("user/password not found")
         }
         else if(!user.correctPassword(req.body.password)){
            console.log("password not found",req.body.password)
            res.send("user/password not found")
         }
         else{
            req.login(user,err => {
                if(err){
                    next(err)
                }else{
                    res.json(user)
                }
            })
        }
    }catch (error) {
        next(error)
    }}
    )


router.use('/google', require('./google'))

module.exports = router