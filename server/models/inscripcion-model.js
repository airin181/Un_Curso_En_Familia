const mongoose = require('mongoose');

const objectSchema = {
    namesur: String,
    email: String,
    telephone: String,
    address: String,
    postalcode: Number,
    previouscontact: String,
    numpeople: String,
    havesons: String,
    agesex: String,
    age: Number,
    relationship: String,
    proyectknowledge: String,
    doubt: String

}

const inscriptionSchema = mongoose.Schema(objectSchema);
const Inscription = mongoose.model('Inscription', inscriptionSchema);
module.exports = Inscription;