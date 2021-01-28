const router = require("express").Router()
const User = require('../db/models/user.js')

//Post logout
router.post('/logout',(req,res,next)=>{
 try {   
    req.logout();
    req.session.destory()
}catch (error) {
    next(error)
    }
})


//Post Sign up
router.post('/sign-Up',(req,res,next)=>{
    try {
        res.send("sending Info")
    } catch (error) {
        next(error)
    }
    
})

//get user
router.get('/',(req,res,next)=>{
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