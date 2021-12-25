const Question = require('../models/Question')
const Category = require('../models/Category')

const indexDashboard = (req, res) =>  res.render('dashboard.ejs')
const createQuestion = (req, res) => {
    let questionObj = {
        question: "water is wet?",
        answers: [
            {
                body: "Yes",
                correct: false
            },
            {
                body: "No",
                correct: false
            },
            {
                body: "Maybe",
                correct: true
            }
        ] 
    }

    Question.create(questionObj).then((err, data)=> {
        if(err) {
            console.log(err)
            res.end()
        }
        else {
            console.log(data)
            res.end()
        }
    });
}

const deleteQuestion = (req, res) => {
    let questionId = req.params.id
    Question.findByIdAndDelete(questionId, (err, doc) => {
        if(err){
            console.log('failed to delete ', err)
        }else{
            res.redirect('/dashboard')
            console.log('deleted ', questionId)
        }
    });
}

const showQuestion = (req, res) => {
    let questionId = req.params.id
    Question.findById(questionId, (err, result) => {
        if(err){
            console.log('coould not show question', err)
        }else {
            console.log(result)
        }
    })
}

const createCategory = (req, res) => {
    let categoryObj = {
        category: "PC",
        childCategory: [
            {
                name: "MATH"
            },
            {
                name: "SVT"
            },
            {
                name: "PS"
            }
        ]
    }
    
    Category.create(categoryObj).then((err, data)=> {
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    });
}


const allCategories = (req, res) => {
    Category.find((err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log(JSON.stringify(result))
        }
    })
}

module.exports = {
    indexDashboard,
    createQuestion,
    createCategory,
    deleteQuestion,
    showQuestion,
    allCategories
}