let express=require('express')
let router=express.Router()

// let user=require('./API/user')
let login=require('./API/login')

// router.get('/user', user.get)
router.get('/', login.login)
// router.post('/register', login.register)

module.exports=router