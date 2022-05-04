const mongoose = require("mongoose");

var mongodbUrl = "mongodb+srv://pranavi:pranavi@cluster0.njooi.mongodb.net/FoodiesHome";

mongoose.connect(mongodbUrl , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log(`connected successfully`);
})

db.on('connection' , ()=>{
    console.log(`Connection failed`);
})

module.exports = mongoose