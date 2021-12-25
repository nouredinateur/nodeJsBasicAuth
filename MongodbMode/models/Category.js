const mongoose = require('mongoose');

const childCategory = new mongoose.Schema({
    name: String,
})

const categorySchema = new mongoose.Schema({
    category: String,
    childCategory: [childCategory]
})

module.exports = mongoose.model('Category', categorySchema)