const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 5,
        max: 100
    },
    password: {
        type: String,
        trim: true,
        default: undefined,
        min: 6,
        max: 1024
    },
    logged: {
        type: Boolean,
        default: false
    }
 });

const User = module.exports = mongoose.model('User', userSchema);