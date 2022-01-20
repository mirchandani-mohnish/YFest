const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;


var userSchema = new Schema({
    emailId: { type:String},
    googleId: {type: String},
    name: String,
    admin:{type: Boolean},
    events:[String],
    image:String
});
userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("user",userSchema,"users");