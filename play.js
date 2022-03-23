const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:10,
        maxlength:10,
        unique:true,
        trim:true,
        required:true,
        
    }
 },{timestamps:true})