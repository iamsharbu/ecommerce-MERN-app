const app = require('express');
const router = app.Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require('../models/User');

router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    })
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user){
            res.status(401).json("noone");
            return
        }
        const hashedPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const pass = hashedPass.toString(CryptoJS.enc.Utf8);
        if(pass!==req.body.password){
            res.status(401).json("wrong pass");
            return
        }
        const accesstoken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin
        }, process.env.JWT_SEC,
        {expiresIn:'3d'}
        )
        const {password, ...others} = user._doc;
        res.status(200).json({...others, accesstoken});
    }
    catch(e){
        res.status(500).json(e);
    }
});

module.exports = router;