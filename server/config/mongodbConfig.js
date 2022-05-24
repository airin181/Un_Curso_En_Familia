require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

const mongoDBConnection = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Now connected to MongoDB Atlas...')
    }
    catch (error) {
        console.log(`Unable to connect to MongoDB database: ${error}`)
    }
};

module.exports = mongoDBConnection;