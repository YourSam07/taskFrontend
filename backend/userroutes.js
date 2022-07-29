const express= require('express')
const { registerUser, loginrUser, getUserData }= require('../controllers/userController')
const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginrUser)
router.get('/data', protect, getUserData)

module.exports = router