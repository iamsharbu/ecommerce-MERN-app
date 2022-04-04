const app = require('express');
const Product = require('../models/Product');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./VerifyToken');
const router = app.Router();

router.post('/', verifyTokenAndAdmin, async(req, res) => {
    const newProduct = new Product(req.body)

    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.put('/:id', verifyTokenAndAdmin, async(req, res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {new: true})
        res.status(200).json(updatedProduct);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.delete('/:id', verifyTokenAndAdmin, async(req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("prod deleted");
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.get('/find/:id', async(req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.get('/', async(req, res) => {
    const query = req.query.new;
    const qCategory = req.query.category;
    try{
        let products;
        if(query){
            products = await Product.find().sort({createdAt: -1}).limit(5);
        }
        else if(qCategory){
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            });
        }
        else{
            products = await Product.find();
        }
        res.status(200).json(products);
    }catch(e){
        res.status(500).json(e)
    }
});

module.exports = router;