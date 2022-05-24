const Inscription = require('../models/inscripcion-model');

const createinscription = async (req, res) => {
    console.log(req.body);
    try {
        const ins = req.body;
        const user = await Inscription.create(ins);
        console.log(user);
        res.status(201).json({"message":'inscripción creada'})
    } catch (err) {
        res.status(400).json({message:err});
    }
}

module.exports ={
    createinscription
};