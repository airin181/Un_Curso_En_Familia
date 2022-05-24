const router = require('express').Router();
const userControllers = require('../controllers/userControllers');
const vinculaControllers= require('../controllers/vinculaControllers');

// User routes
router.post('/signup', userControllers.createUser);
router.post('/login', userControllers.loginUser);
router.get('/logout/:email', userControllers.logoutUser);

router.post('/create', vinculaControllers.createinscription);

module.exports = router;