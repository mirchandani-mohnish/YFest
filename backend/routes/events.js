var express = require("express");
var router = express.Router();
var passport = require("passport");

const Event = require("../models/event");
const Club = require("../models/club");

router.post("/add", (req, res) => {
    if (req.isAuthenticated()) {
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

            Club.findOne({ "clubName": clubName }, function (err, club) {
                if (club) {
                    club.events.push(newEvent);
                    club.save((err) => {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send("Success");
                        }
                    });
                }
            });
        })
    } else {
        res.statusCode = 401
        res.redirect("401");
    }
});

router.get("/", (req, res) => {
    Event.find({}, function(err, events) {
        if (err) {
            res.send(err);
        } else {
            res.send(events);
        }
    });
});

module.exports = router;