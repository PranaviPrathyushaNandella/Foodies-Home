const express = require("express");

const Pizza = require('./models/pizzaModel')

const db = require("./db");
const { is } = require("express/lib/request");

const app = express();

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute');
//const { default: payment } = require("./routes/ordersRoute");

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)

// app.get("/secret", async (req, res) => {
//   const intent = fetch(payment)// ... Fetch or create the PaymentIntent
//     res.json({ client_secret: intent.client_secret });
// });

app.get("/", (req, res)=>{
    res.send("server wooooooooooohhhhhh working" +port);
});

// app.get("/getpizzas", (req,res)=>{

//     Pizza.find({}, (err,docs)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(docs);
//         }
//     })

// });

const port = process.env.port || 8000;

app.listen(port,()=>`server running on port`);