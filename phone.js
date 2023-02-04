const mongoose= require('mongoose');
const phoneSchema= new mongoose.Schema({
    name:String,
    price:String,
    brand:String,
    category:String
});

module.exports= mongoose.model('phone',phoneSchema);