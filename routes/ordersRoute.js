const express = require('express')
const router = express.Router()
const { v4 : uuidv4 } =require("uuid");
const stripe = require("stripe")(
  "sk_test_51KtcvTSHFrONo2xnKYz8Abl0XvsTwn4Z608ie3queWu7MTtIstGGQYQ0GwFHBTK5yki4bpYGfmC240n61Xgjj3Bu00UXajnr5C"
);
const Order = require('../models/orderModel')

router.post('/placeorder',async(req,res)=>{

    const {token , subtotal , currentUser , cartItems} = req.body

    try {
        const customer =  await stripe.customers.create({
            email : token.email,
            source : token.id
        })
        const payment = await stripe.paymentIntents.create(
          {
            amount: subtotal * 100,
            currency: 'INR',
            customer: currentUser.id,
            receipt_email: token.email,
            payment_method_types: ["card"],
            setup_future_usage: "off_session",
            statement_descriptor: "Custom descriptor",
            metadata: {
              order_id: token.idempotencyKey,
            },
          },
          {
            idempotencyKey: uuidv4(),
          }
        );
        

        if(payment){

            const neworder = new Order({
                name : currentUser.name,
                email : currentUser.email,
                userid : currentUser._id,
                orderItems : cartItems,
                orderAmount : subtotal,
                shippingAddress : {
                    street : token.card.address_line1,
                    city : token.card.address_city,
                    country : token.card.address_country,
                    pincode : token.card.address_zip
                },
                transactionId : token.card.id

            })

            neworder.save()
            res.send("Payment Successful!!!")
        }
        else{
            res.send("Payment Failed")
        }
    } catch (error) {
        return res.status(400).json({message : "Somenthing went wrong"+error})
    } 


})

router.post("/getuserorders",async(req,res)=>{
  const {userid} = req.body

  try {
    const orders = await Order.find({userid : userid}).sort({_id : -1})
    res.send(orders)
  } catch (error) {
    return res.send(400).json({message: 'Something went wrong'})
  }
})

router.get("/getallorders",async(req,res)=>{
  try {
    const orders = await Order.find({})
    res.send(orders)
  } catch (error) {
    return res.status(400).json({message:error})
  }
})

router.post('/deliverorder' ,async(req,res)=>{
  const orderid = req.body.orderid
  try {
    const order = await Order.findOne({_id : orderid})
    order.isDelivered = true
    await order.save()
    res.send("Order delivered successfully")
  } catch (error) {
    return res.send(400).json({message : 'Something went wrong'})
  }
})

module.exports = router;
//exports.payment = router.post.payment