var express = require("express");
var router = express.Router();
var passport = require("passport");
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


const Club = require("../models/club");

router.post("/add", (req, res) => {
    if (req.isAuthenticated()) {
        const clubName = req.body.clubName;
        const clubDescription = req.body.clubDescription;

        console.log(clubName, clubDescription);

        const newClub = new Club({
            clubName: clubName,
            clubDescription: clubDescription
        });

        console.log(newClub);
        newClub.save(err => {
            if (err) {
                res.send(err);
            } else {
                res.send(newClub)
            }
        });
    } else {
        res.statusCode = 401;
        res.send("401");
    }
})

router.get("/get", (req, res) => {
    Club.find({}, (err, clubs) => {
        res.send(clubs);
    });
})

module.exports = router;