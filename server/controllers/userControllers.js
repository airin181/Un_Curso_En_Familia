require('mongoose');

const User = require('../models/models-vincula');

const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await Users.find({}, "-_id");
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

const createUser = async (req, res) => {
    const { name, email, tlf, address, zip_code } = req.body;
    try {
        const newUser = new User(req.body);
        newUser.save((err, newUser) => {
            err ? console.log(err) : console.log(`${newUser.name} saved in the Users collection!`)
        });
        res.status(201).json({msg: "New user saved" + req.body});
    } catch (error) {
        res.status(400).json({ msg: `error ${err}` });
    }
}

userControllers = {
    getAllUsers,
    createUser
}

module.exports = userControllers;
