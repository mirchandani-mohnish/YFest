var express = require("express");
var router = express.Router();
const User = require('../models/user');
const cookieParser = require('cookie-parser')

router.get("/in", (req, res) => {
    if (req.user) res.send(true);
    else {
        let cookie = req.headers.cookie;
        var output = {};
        cookie.split(/\s*;\s*/).forEach(function (pair) {
            pair = pair.split(/\s*=\s*/);
            var name = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair.splice(1).join('='));
            output[name] = value;
        });
        // console.log(output);
        const userData = JSON.parse(output.loginCookie);
        console.log(userData);

        // saving the user in DB
        const newUser = User({
            username: userData.email,
            googleId: userData.googleId,
            name: userData.name,
            clubOwner: false,
            image: userData.imageUrl
        })
        User.findOne({'googleId' : userData.googleId}, function(err, foundUser){
            if (err) {
                console.log(err);
                res.send("error");
            }

            if (!foundUser) {
                newUser.save((err) => {
                    if (err) {
                        console.log(err);
                        res.send("error");
                    } else {
                        res.send(newUser);
                    }
                });
            } else {
                res.send(foundUser);
            }
        });
    }
});



router.get("/out", (req, res) => {
    req.logout();
    res.redirect("/log/in");
});

module.exports = router;