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
        unique: true,
        trim: true
    },
    password: {
        type: String,
        default: undefined
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
        type: String,
        required: true,
        trim: true
    },
    logged: {
        type: Boolean,
        default: false
    }
 });

let User = module.exports = mongoose.model('User', userSchema);