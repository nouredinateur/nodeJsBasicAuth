const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const db = require('./config/database');
let session = require('express-session');
const store = new session.MemoryStore();
let connection = mysql.createConnection(db.connection); 
const loginRoutes = require('./routes/loginRoutes');

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
    saveUninitialized: false,  // Save a session that is new, but has not been modified
    cookie:{
        maxAge: 300 * 60000
    },
    store
}))

app.get('/', (req, res,) => {
    res.render('index.ejs')
    console.log(session)
})

app.use('/auth', loginRoutes.router)

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})