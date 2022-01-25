var express = require("express");
var router = express.Router();

const Event = require("../models/event");
const Club = require("../models/club");

router.post("/add", (req, res) => {
    const eventName = req.body.eventName;
    const clubName = req.body.clubName;
    const eventDescription = req.body.eventDescription;

    let newEvent = new Event({
        eventName: eventName,
        eventDescription: eventDescription,
        clubName: clubName 
    })
    console.log(newEvent);

    newEvent.save((err) => {
        if (err) console.log(err);

        Club.findOne({"clubName" : clubName}, function(err, club){
            if (club) {
                club.events.push(newEvent);
                club.save((err) => {
                    if (err) console.log(err);
                    res.send([club, newEvent]);
                });
            }
        });
    })
});

module.exports = router;