/* const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_DIRECTION,
        pass: process.env.EMAIL_PASSWORD
    }
});

module.exports = transporter; */

// Configuración del transporter de Nodemailer, para su posterior uso en funciones de recuperación y cambio de contraseña.