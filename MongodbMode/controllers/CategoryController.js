const Category = require('../models/Category')


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
    createCategory,
    allCategories
}