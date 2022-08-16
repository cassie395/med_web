let express=require('express')
let router=express.Router()

let user=require('./API/user')
let login=require('./API/login')
let MedNum=require('./API/MedNum')
let record=require('./API/record')
let check=require('./API/check')

router.get('/user', user.get)
router.get('/', login.login)
router.get('/getMedNum', MedNum.getMedNum)
router.get('/updateMedNum', MedNum.updateMedNum)
router.get('/insertRecord', record.insert)
router.get('/getRecord', record.get)
router.get('/shift', check.shift)
router.get('/getShift', check.get)

module.exports=router
