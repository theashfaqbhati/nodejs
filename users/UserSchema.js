const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    Email:String,
    password:String,
    number:String
});

module.exports = mongoose.model('phone',userSchema)