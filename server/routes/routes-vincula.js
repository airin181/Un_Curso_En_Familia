const { Router } = require('express');
const router = require('express').Router();

router.get('/', (req, res) => {res.json({msg: "Hello World SUUUUUUU"})})


module.exports = router;