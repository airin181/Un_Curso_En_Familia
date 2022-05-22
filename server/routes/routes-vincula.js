const {Router} = require('express');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({msg: "Hello World SUUUUUUU"})
})
router.get('/inscripcion/create', (req, res) => {
    res.json({msg: "Create inscrip"})
})

module.exports = router;