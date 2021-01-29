const router = require("express").Router()
const User = require('../db/models/user.js')
module.exports = router

router.post("/register", async (req, res, next) => {
    try {
      let { firstName, lastName, email, password, img, googleID } = req.body;
      console.log({
        firstName,
        lastName,
        email,
        password,
        img,
        googleID,
      });
      let newUser = await User.create(req.body);
      req.login(newUser,err => (err ? next(err) : res.json(newUser)))
    } catch (error) {
        if(error.name==="SequelizeUniqueConstraintError"){
            res.send("user already exist")
        }
        else{
            next(error)
        }
    }
  });



  router.put("/edit", async (req, res, next) => {
    try {
      let updateUser = await User.update(req.body);
    } catch (error) {}
  });



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

//Post logout
router.post('/logout',(req,res,next)=>{
    try {   
       req.logout();
       req.session.destory()
   }catch (error) {
       next(error)
       }
   })


router.get('/me',(req,res)=>{
    res.json(req.user)
})

router.use('/google', require('./google'))


