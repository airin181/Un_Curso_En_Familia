//models
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    tlf: {
        type: Number,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    zip_code: {
        type: Number,
        required: true,
        trim: true
    }
 })

let User = module.exports = mongoose.model('User', userSchema);