const mongoose = require("mongoose")
const validator = require("validator")
const foodSchema = new mongoose.Schema({

    image: {
        type: String,
        trim: true
    },

    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 25
    },
    descreption: {
        type: String,
        require: true,

    },
    price: {
        type: Number,
        trim: true,
    },
    category: {
        type: String,
        require: true,
        enum: ['', '', ''],

    },
    rate: {
        type: Number,
        min: 1,
        max: 5,
    },
    comments: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        content: {
            type: String,
            require: true,
        }
    }],

    likes: {
        type: Number,
        trim: true,
    },

    adds: [{
        type: String,
    }],
},

    { timestamps: true })


const FOOD = mongoose.model('FOOD', foodSchema)
module.exports = FOOD
