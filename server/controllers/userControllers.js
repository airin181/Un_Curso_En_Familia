const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwt_secret = process.env.ULTRA_SECRET_KEY;
const UserData = require('../models/userDataModel');
const User = require('../models/userModel');

// Users

const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await Users.find({}, "-_id");
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

const createUser = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        User.create({ "email": email, "password": hashedPassword, "logged": false });
        res.status(201).json({ msg: "New user saved " + email });
        /* newUser.save((err, newUser) => {
            err ? console.log(err) : console.log(`${newUser.name} saved in the Users collection!`)
        });
        res.status(201).json({msg: "New user saved" + req.body}); */
    } catch (error) {
        res.status(400).json({ msg: `error ${err}` });
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
                const token = jwt.sign(userForToken, jwt_secret, { expiresIn: '20m' });
                res.status(200).json({
                    msg: 'Authenticated correctly!',
                    token: token
                })
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
        res.status(200).json({msg: 'Token deleted'})
    } catch (error) {
        console.log('Error:', error);
    }
}


/* const sendForm = async (req, res) => {
    const { name, email, tlf, address, zip_code } = req.body;
    try {
        UserData.create({ "name": name, "email": email, "tlf": tlf, "address": address, "zip_code": zip_code });
        res.status(201).json({ msg: "New user data saved " + name });
        newUser.save((err, newUser) => {
            err ? console.log(err) : console.log(`${newUser.name} saved in the Users collection!`)
        });
        res.status(201).json({msg: "New user saved" + req.body});
    } catch (error) {
        res.status(400).json({ msg: `error ${err}` });
    }
}; */

userControllers = {
    getAllUsers,
    createUser,
    loginUser,
    logoutUser
    /* sendForm */
}

module.exports = userControllers;
