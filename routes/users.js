const express = require('express')
const router = express.Router()

//All Users Route 
router.use('/register',require('./regisiter'))

module.exports = router;