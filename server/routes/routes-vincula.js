const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

router.post('/signup', userControllers.createUser);
router.post('/login', userControllers.loginUser);
router.get('/logout/:email', userControllers.logoutUser)


module.exports = router;