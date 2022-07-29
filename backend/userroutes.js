const express= require('express')
const { registerUser, loginrUser, getUserData }= require('./Controllers/userContoller')
const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginrUser)
router.get('/data', getUserData)

module.exports = router