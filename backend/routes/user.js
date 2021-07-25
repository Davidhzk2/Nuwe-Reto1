const express  = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const User = require("../models/user");

router.post("/registerUser/", async (req, res) =>{
    if(!req.body.name || !req.body.username || !req.body.email || !req.body.password)
    return res.status(400).send("Incomplete Data");
    
    const hash = await bcrypt.hash(req.body.password, 10);

    user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hash,
    });

    try {
        const result = await user.save();
        res.status(200).send({result});
    } catch (error) {
        return res.status(400).send("Failed to register user");
    }
});

router.post("/login/", async (req, res) =>{
    if(!req.body.username || !req.body.password) return res.status(400).send("Incomplete data");

    let user = await User.findOne({username: req.body.username});
    
    if(!user) return res.status(400).send("Usuario y/o contraseña  incorrecto !");
    // comparar contraseña
    const hash = await bcrypt.compare(req.body.password, user.password);
    // validar contraseña
    if (!hash) return res.status(400).send("Usuario y/o contraseña incorrecto.");

    return res.status(200).send({user});
});

module.exports = router;