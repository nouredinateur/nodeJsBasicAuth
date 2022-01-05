const express = require('express')
const router = express()
const dashboardController = require('../controllers/dashboardController')
const Category = require('../controllers/CategoryController')
const Question = require('../controllers/QuestionController')

router.get('/', dashboardController.indexDashboard)
router.post('/create', Question.createQuestion)
router.post('/category', Category.createCategory)
router.get('/delete/(:id)', Question.deleteQuestion)
router.get('/show/(:id)', Question.showQuestion)
router.get('/categories',Category.allCategories)
router.get('/questions', Question.allQuestions)
router.get('/create', Question.addQuestion)

module.exports = {
    router
}