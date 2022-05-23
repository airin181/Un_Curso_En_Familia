const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

router.get('/', userControllers.getAllUsers);
router.post('/signup', userControllers.createUser);
router.post('/login', userControllers.loginUser);
router.get('/logout/:email', userControllers.logoutUser)
// router.post('/form', userControllers.sendForm);


module.exports = router;