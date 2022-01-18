const mongoose = require('mongoose');
const event = require('./event');

const Schema = mongoose.Schema;


var userSchema = new Schema({
    emailId: { type:String},
    googleId: {type: String},
    username: { type:String,required:true,unique:true},
    admin:{type: Boolean},
    events:[String]

});


module.exports = mongoose.model("user",userSchema,"users");