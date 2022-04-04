const app = require('express');
const stripe = require('stripe')('sk_test_51KkTj0SAyb2zP5bAs1dwqHnG2ypX5tPvCarBh48s9NPlE5WyGakx3LAY98jXngFrMh2JONbZTkrzOHDURa68IQpX00Gwn9sdVw');
const router = app.Router();

router.post('/payment', (req, res) => {
    console.log(req.body)
    stripe.charges.create({
        amount: 999,
        currency: 'usd',
        description: 'Example charge',
        source: req.body.tokenId,
        statement_descriptor: 'Custom descriptor',
    }, (err, res)=>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).json(res);
        }
    });
});


module.exports = router;