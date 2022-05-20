const { Router } = require('express');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile({msg: "Hello World SUUUUUUU"})})


module.exports = router;