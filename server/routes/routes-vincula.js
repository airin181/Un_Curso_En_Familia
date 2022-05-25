const router = require('express').Router();
const userControllers = require('../controllers/userControllers');
const vinculaControllers= require('../controllers/vinculaControllers');

// User routes
router.post('/signup', userControllers.createUser);
router.post('/login', userControllers.loginUser);
router.get('/logout/:email', userControllers.logoutUser);

// Form routes
router.post('/create', vinculaControllers.createinscription);


// Rutas para posibles futuras implementaciones en la web.

// router.get('/recoverpassword/:email', userControllers.recoverPassword);
// router.put('/resetpassword/:recoverToken', userControllers.resetPassword);

module.exports = router;