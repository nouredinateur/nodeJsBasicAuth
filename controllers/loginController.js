const db = require('../config/database');
const mysql = require('mysql');
const session = require('express-session');
let connection = mysql.createConnection(db.connection); 

const indexLogin = (req, res) => {
    console.log(req.sessionID)
    res.render('login.ejs')
}

const indexSignup = (req, res) => {
    res.render('signup.ejs')
}

const profile = (req, res) => {
    res.Render('profile.ejs')
}

const signup = () => {
    let user  = {
        name : req.body.name, 
        email : req.body.email, 
        password : req.body.password
    };
    connection.query('INSERT INTO users SET ?', user , function (error, results, fields) {
        if (error) throw error;
        console.log(results)
    });
    res.redirect('/');
}

const login = (req, res) => {
    let email = req.body.email
    let password = req.body.password
    if(email && password){
        connection.query("SELECT * FROM `users` WHERE `email` = ? AND password = ?", [email, password ] , function (error, results, fields) {
            if(error) {
                throw error
            }else{
                console.log(results)
                if(results[0]){
                    req.session.authenticated = true;
                    req.session.user = {
                        email, password
                    }
                    // res.json(req.session)
                }else{
                    res.send({
                        message: "Bad Credentials"
                    })
                }
            }
        });
    }
}

const logout = (req, res) => {
    console.log('logout route clicked')
}

const hasArole = (req, res) => {
       if(result[0].role == "teacher") {
           res.render('teacher.ejs')
       }else{
           res.render('student.ejs')
       }
}

module.exports = {
    indexLogin,
    indexSignup,
    profile,
    signup,
    login,
    logout,
    hasArole
}