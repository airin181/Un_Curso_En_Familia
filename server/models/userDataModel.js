// Tendrá que actualizarse cuando Pedro acabe el esquema del modelo formulario
const mongoose = require('mongoose');

const userDataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 5,
        max: 100
    },
    tlf: {
        type: String,
        required: true,
        unique: true,
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
    date: {
        type: Date,
        default: Date.now
    }
 });

let UserData = module.exports = mongoose.model('UserData', userDataSchema);