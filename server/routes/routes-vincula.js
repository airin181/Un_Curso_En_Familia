const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

router.get('/', userControllers.getAllUsers);
router.post('/login', userControllers.createUser);


module.exports = router;