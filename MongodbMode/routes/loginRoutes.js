const express = require('express')
const router = express()
const loginController = require('../controllers/loginController')

router.get('/', loginController.indexLogin)
router.get('/signup', loginController.indexSignup)
// router.get('/profile', loginController.profile)
router.post('/login', loginController.login)
router.post('/signup', loginController.signup)
// router.post('/logout', loginController.logout)

module.exports = {
    router
}