const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

router.get('/', userControllers.getAllUsers);
router.post('/signup', userControllers.createUser);
router.post('/login', userControllers.loginUser); // Si el usuario ya está guardado el mensaje que llega debería cambiar.
router.get('/logout/:email', userControllers.logoutUser)
// router.post('/form', userControllers.sendForm);


module.exports = router;