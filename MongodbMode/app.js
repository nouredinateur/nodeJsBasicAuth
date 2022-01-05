const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const loginRoutes = require('./routes/loginRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes')

let port = 1005;
let url = 'mongodb://localhost:27017/quiz';

mongoose.connect(url)

app.set("view engin", "ejs")
app.set('views', 'views')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/auth', loginRoutes.router)
app.use('/dashboard', dashboardRoutes.router)

app.get('/', () => {
    console.log('GOT IN')
})


app.listen(port, () => {
    console.log(`The server is running on port : ${port}`)
})