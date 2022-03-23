const mongoose = require("mongoose")
const validator = require("validator")
const postSchema = new mongoose.Schema({
    phone: [
        {
            type: String,
            trim: true,
            required: true,
            validate(value) {
                if (!validator.isMobilePhone(value, ['ar-EG']))
                    throw new Error("invalid phone number")
            }
        }
    ],
    address: [
        {
        type: String,
        trim: true,
        required: true,
        minlength: 5,
        maxlength: 50
    }
],
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error("invalid email format")
        }
    },
    workTime: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 25
    },
    weeekend: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 25
    },
    about: {
        type: String,
        required: true,
    },
},
    { timestamps: true })

const Post = mongoose.model('Info', postSchema)
module.exports = Post