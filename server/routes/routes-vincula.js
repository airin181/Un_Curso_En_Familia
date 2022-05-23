const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

router.get('/', userControllers.getAllUsers);
router.post('/signup', userControllers.createUser);
router.post('/login', userControllers.loginUser);
router.get('/logout/:email', userControllers.logoutUser)
// router.post('/form', userControllers.sendForm);
router.get('/', (req, res) => {
    res.json({msg: "Hello World SUUUUUUU"})
})
router.get('/inscripcion/create', (req, res) => {
    res.json({msg: "Create inscrip"})
})

module.exports = router;