var express = require('express');
var router = express.Router();
const Razorpay = require('razorpay');

var instance = new Razorpay({
  key_id: 'key id',
  key_secret: 'key secret',
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create/orderID',(req,res)=>{
  var options = {
    amount: 50000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function(err, order) {
    console.log(order);
    return res.send(order)
  });
})


module.exports = router;
