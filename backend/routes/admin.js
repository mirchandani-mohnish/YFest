var express = require("express");
var router = express.Router();

router.get("/addEvent", (req, res) => {
    res.render("addEvent");
});

module.exports = router;