const mongoose = require('mongoose');


const Schema = mongoose.Schema;


var eventSchema = new Schema({
    eventName: { type:String, required: true},
    eventDescription: {type: String},
    clubName: { type:String,required:true},
    date: {type: Date, default: Date.now}

});


module.exports = mongoose.model("event",eventSchema,"events");