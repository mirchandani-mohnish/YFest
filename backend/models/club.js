const mongoose = require('mongoose');


const Schema = mongoose.Schema;


var userSchema = new Schema({
    clubName: {type: String, required: true},
    // clubImage: {type: }
    clubDescription: {type: String},
    events: [ObjectId]

});


module.exports = mongoose.model("user",userSchema,"users");