const User = require('../models/user-model');

const getUsers = (req,res) => {
    res.json({
        message: "Mensaje de prueba"
    })
}

const newUser = async (req,res) => {
    const {email,password,name} = req.body;
    const user = new User(req.body);
    console.log("Guardando un usuario");
    await user.save();
    return res.status(201).json({
        ok:true,
        msg: 'registro',
    });

}

const loginUser = (req,res) => {
    const {email,password,name} = req.body;

}

module.exports = {
    getUsers,
    newUser
}