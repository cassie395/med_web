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
router.get('/getAllNum', MedNum.getAllNum)
router.get('/getExactNum', MedNum.getExactNum)
router.get('/getAllExactNum', MedNum.getAllExactNum)
router.get('/updateMedNum', MedNum.updateMedNum)
router.get('/insertRecord', record.insert)
router.get('/getRecord', record.get)
router.get('/getLastRNO', record.getLastRNO)
router.get('/updateLastRNO', record.updateLastRNO)
router.get('/shift', check.shift)
router.get('/psn', check.psn)
router.get('/getShift', check.get)
router.get('/getPsn', check.getp)
router.get('/getPsn2', check.getp2)

module.exports=router