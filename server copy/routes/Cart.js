const app = require('express');
const Cart = require('../models/Cart');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./VerifyToken');
const router = app.Router();

router.post('/', verifyToken, async(req, res) => {
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.put('/:id', verifyTokenAndAuth, async(req, res) => {
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {new: true})
        res.status(200).json(updatedCart);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.delete('/:id', verifyTokenAndAuth, async(req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("cart deleted");
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.get('/find/:userId', verifyTokenAndAuth, async(req, res) => {
    try{
        const cart = await Cart.findById({userId: req.params.userId})
        res.status(200).json(cart);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.get('/', verifyTokenAndAdmin, async(req, res) => {
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(e){
        res.status(500).json(e)
    }
});

module.exports = router;