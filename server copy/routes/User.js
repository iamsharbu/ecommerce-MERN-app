const app = require('express');
const { findByIdAndDelete } = require('../models/User');
const User = require('../models/User');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./VerifyToken');
const router = app.Router();

router.put('/:id', verifyTokenAndAuth, async(req, res)=>{
    console.log('reached')
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true})
        res.status(200).json(updatedUser);
    }catch(e){
        res.status(500).json(err);
    }
});

router.delete("/:id", verifyTokenAndAuth, async (req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user deleted");
    }catch(e){
        res.status(500).json(e)
    }
})

router.get("/find/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json({...others});
    }catch(e){
        res.status(500).json(e)
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    const query = req.query.new;
    try{
        const user = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
        res.status(200).json(user);
    }catch(e){
        res.status(500).json(e)
    }
})

router.get("/stats", verifyTokenAndAdmin, async (req, res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try{
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project:{
                    month: {$month: "$createdAt"},
                }
            },
            {
                $group:{
                    _id: "$month",
                    total:{$sum:1},
                }
            }
        ])
        console.log(data);
        res.status(200).json(data);
    }catch(e){
        res.status(500).json(e)
    }
})

module.exports = router;