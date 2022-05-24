const jwt = require('jsonwebtoken');
const jwt_secret = process.env.ULTRA_SECRET_KEY;
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const regex = require('../utils/regex')

// Users

const createUser = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findOne({ "email": email });
    if (!user && regex.validateEmail && regex.validatePassword) {
        try {
            User.create({ "email": email, "password": hashedPassword, "logged": false });
            res.status(201).json({ msg: "New user saved " + email });
        } catch (error) {
            res.status(400).json({ msg: `error ${err}` });
        };
    } else {
        res.status(400).json({ msg: "Invalid email or password" })
    }
};

const loginUser = async (req, res) => {
    let data;
    try {
        const { email, password } = req.body;
        data = await User.findOne({ "email": email }, '-_id -__v');
        if (!data) {
            res.status(400).json({ msg: 'Incorrect user or password. Try again.' });
        } else {
            const match = await bcrypt.compare(password, data.password);
            if (match) {
                await User.updateOne({ email: req.body.email }, { logged: true });
                const { email, name } = data;
                const userForToken = {
                    email: email,
                    name: name
                };
                const token = jwt.sign(userForToken, jwt_secret, { expiresIn: '5m' });
                res.status(200).json({
                    msg: 'Authenticated correctly!',
                    token: token
                });
            } else {
                res.status(400).json({ msg: 'Incorrect user or password' });
            }
        }
    } catch (error) {
        console.log('Error:', error);
    }
};

const logoutUser = async (req, res) => {
    let data;
    try {
        data = await User.updateOne({ email: req.params.email }, { logged: false });
        res.status(200).json({ msg: 'Token deleted' })
    } catch (error) {
        console.log('Error:', error);
    }
};


userControllers = {
    createUser,
    loginUser,
    logoutUser
};

module.exports = userControllers;