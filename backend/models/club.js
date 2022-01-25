const mongoose = require('mongoose');


const Schema = mongoose.Schema;


var clubSchema = new Schema({
    clubName: String,
    // clubImage: {type: }
    clubDescription: String,
    events: [{type: Schema.Types.ObjectId, ref: 'event'}]

});


module.exports = mongoose.model("club",clubSchema,"clubs");