const mongoose = require('mongoose')

const mealtypeschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    
    image:{
        type:String,
        required:true
    },
    
    _id:String

})

module.exports = mongoose.model("mealtype",mealtypeschema,"mealtype")
