const User = require('../models/User');


const indexSignup = (req, res) => res.render('signup.ejs')
const indexLogin = (req, res) => res.render('login.ejs')

const signup = (req, res) => {
    let userObj  = {
        name : req.body.name, 
        email : req.body.email, 
        password : req.body.password,
        role: "student"
    };
    const user = User.create(userObj, (err, result)=> {
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.redirect("/auth/")
        }
    })
}

const login = (req, res) => {
    let userObj = {
        email: req.body.email ,
        password: req.body.password
    }
    const user = User.find(userObj, (err, result) => {
        if(err){
            console.log(err)
            res.end()
        }else{
            console.log(result)
            if(result[0].role == "teacher"){
                res.redirect('/dashboard')
            }else{
                res.redirect('/quiz')
            }
        }
    })
}

module.exports = {
    indexSignup,
    indexLogin,
    signup,
    login
}