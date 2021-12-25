const express = require('express')
const router = express()
const dashboardController = require('../controllers/dashboardController')

router.get('/', dashboardController.indexDashboard)
router.get('/create', dashboardController.createQuestion)
router.post('/category', dashboardController.createCategory)
router.delete('/delete/(:id)', dashboardController.deleteQuestion)
router.get('/show/(:id)', dashboardController.showQuestion)
router.get('/categories', dashboardController.allCategories)
module.exports = {
    router
}