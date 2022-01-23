var express = require('express')
var router = express.Router()

const User = require("../models/user");

router.get("/", function(req, res) {
    res.send(req.user);
})

module.exports = router;