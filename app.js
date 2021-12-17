const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const db = require('./config/database');
var session = require('express-session')
var connection = mysql.createConnection(db.connection); 


const app = express();
const port = 1216;

app.set("view engin", "ejs")
app.set('views', 'views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(session({
    name: 'auth_cookie',
    secret: "sarot",
    resave: false, // Force save of session for each request.
    saveUninitialized: true,  // Save a session that is new, but has not been modified
    cookie:{
        maxAge: 300 * 60000
    } 
}))

app.get('/', (req, res,) => {
    res.render('index.ejs')
    console.log(session)
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.get('/profile', (req, res) => {
    res.render('profile.ejs')
})

app.post('/signup', (req, res) => {
    var user  = {
        name : req.body.name, 
        email : req.body.email, 
        password : req.body.password
    };
    connection.query('INSERT INTO users SET ?', user , function (error, results, fields) {
        if (error) throw error;
        console.log(results)
    });
    res.redirect('/');
})

app.post('/login', (req, res) => {

    var email = req.body.email
    var password = req.body.password

    connection.query("SELECT * FROM `users` WHERE `email` = ? AND password = ?", [email, password ] , function (error, results, fields) {
        if (error) throw error;
        else console.log(results)
        if(!results[0]) res.end()
        else res.render('profile.ejs', {
            result: results[0]
        })
    });
})

app.post('/logout', (req, res) => {
    console.log('logout route clicked')
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})