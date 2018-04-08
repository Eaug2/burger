var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data);
        res.render("index", { burger_data });
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        res.redirect("/")
    })
});

router.put("/burgers/update/:id", function (req, res) {
    burger.update(req.body.id, function (result) {
        console.log(result);
        res.redirect("/");
    })
});



module.exports = router;