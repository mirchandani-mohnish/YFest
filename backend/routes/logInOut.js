var express = require("express");
var router = express.Router();

router.get("/in", (req, res) => {
    if (req.user) res.send(true);
    else res.redirect("/auth/google");
});

router.get("/out", (req, res) => {
    req.logout();
    res.redirect("/log/in");
});

module.exports = router;