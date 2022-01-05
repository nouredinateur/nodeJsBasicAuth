const Question = require('../models/Question')
const Category = require('../models/Category')

const createQuestion = (req, res) => {
    let questionObj = {
        question: req.body.question,
        category: req.body.category,
        answers: [
            {
                body: req.body.AnswerOne.answer,
                correct: req.body.AnswerOne.correct ?  true : false
            },
            {
                body: req.body.AnswerTwo.answer,
                correct: req.body.AnswerTwo.correct ?  true : false
            },
            {
                body: req.body.AnswerThree.answer,
                correct: req.body.AnswerThree.correct ? true : false
            },
            {
                body: req.body.AnswerFore.answer,
                correct: req.body.AnswerFore.correct ? true : false
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
            res.redirect('/dahsboard/questions')
        }
    });
}

const deleteQuestion = (req, res) => {
    let questionId = req.params.id
    Question.findByIdAndDelete(questionId, (err, doc) => {
        if(err){
            console.log('failed to delete ', err)
        }else{
            res.redirect('/dashboard/questions')
            console.log('deleted ', questionId)
        }
    });
}

const showQuestion = (req, res) => {
    let questionId = req.params.id
    Question.findById(questionId, (err, result) => {
        if(err){
            console.log('could not show question', err)
        }else {
            console.log(result)
        }
    })
}


const allQuestions = (req, res) => {
    Question.find((err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log(JSON.stringify(result))
            res.render('questions.ejs', {
                questions: result
            })
        }
    })
}

const addQuestion = (req, res) => {
        Category.find((err, result) => {
            if(err){
                console.log(err)
            }else{
                console.log(result)
                res.render('create.ejs', {
                    categories :result
                })
                
            }
        })
}

module.exports = {
    createQuestion,
    showQuestion,
    deleteQuestion,
    allQuestions,
    addQuestion
    
}