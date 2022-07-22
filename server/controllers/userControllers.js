const jwt = require('jsonwebtoken');
const jwt_secret = process.env.ULTRA_SECRET_KEY;
const bcrypt = require('bcrypt');
// const transporter = require('../config/nodemailer')
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

// Controladores para la recuperación y restauración de la contraseña del usuario en la base de datos. Como se ha planificado para una supuesta fase 2 del proyecto, se comentan para así no dejar posibles brechas de seguridad en la plataforma.

/* const recoverPassword = async (req, res) => {
    try {
        const recoverToken = jwt.sign({ email: req.params.email }, jwt_secret, { expiresIn: '20m' });
        const url = `${urlRecoverPassword}/resetpassword/` + recoverToken;
        await transporter.sendMail({
            to: req.params.email,
            subject: 'Recover Password',
            html: `<h3>Recover Password</h3>
                <a href = ${url}>Click to recover password</a>
                <p>Link will expire in 20 minutes</p>`
        });
        res.status(200).json({
            message: 'A recovery email has been sent to your mail direction'
        })
    } catch (error) {
        console.log('Error:', error)
    }
};

const resetPassword = async (req, res) => {
    try {
        const recoverToken = req.params.recoverToken;
        const payload = jwt.verify(recoverToken, jwt_secret);
        const password = req.body.password
        if (regex.validatePassword(password)) {
            const hashPassword = await bcrypt.hash(password, 10);
            await User.findOneAndUpdate(
                { email: payload.email },
                { password: hashPassword }
            );
        } else {
            res.status(400).json({ msg: 'Password must have at least 8 characters, one uppercase, one lowercase and one special character' });
        }
        res.status(200).json({ message: 'Password actualized' });
    } catch (error) {
        console.log('Error:', error);
    }
} */

userControllers = {
    createUser,
    loginUser,
    logoutUser
    /* ,
    recoverPassword,
    resetPassword */
};

module.exports = userControllers;