const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    body: String,
    correct: Boolean
})

const questionSchema = new mongoose.Schema({
    question: String,
    answers: [answerSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Question', questionSchema)