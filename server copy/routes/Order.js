const app = require('express');
const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./VerifyToken');
const router = app.Router();

router.post('/', verifyToken, async(req, res) => {
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.put('/:id', verifyTokenAndAdmin, async(req, res) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {new: true})
        res.status(200).json(updatedOrder);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.delete('/:id', verifyTokenAndAdmin, async(req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order deleted");
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.get('/find/:userId', verifyTokenAndAuth, async(req, res) => {
    try{
        const orders = await Order.findById({userId: req.params.userId})
        res.status(200).json(orders);
    }
    catch(e){
        res.status(500).json(e);
    }
});

router.get('/', verifyTokenAndAdmin, async(req, res) => {
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(e){
        res.status(500).json(e)
    }
});

router.get("/income", verifyTokenAndAdmin, async (req, res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try{
        const data = await Order.aggregate([
            {$match: {createdAt: {$gte: prevMonth}}},
            {
                $project:{
                    month: {$month: "$createdAt"},
                    sales:"$amount"
                }
            },
            {
                $group:{
                    _id: "$month",
                    total:{$sum:"$sales"},
                }
            }
        ])
        console.log("fwedw")
        res.status(200).json(data);
    }catch(e){
        res.status(500).json(e)
    }
})

module.exports = router;