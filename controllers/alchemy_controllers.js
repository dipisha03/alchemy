var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models/");

// ============================ Routes ========================== //

// Index Redirect
router.get('/', function(req, res) {
    res.redirect('/burgers');
    // res.render("index");
});


// Index Page (render all burgers to DOM)
router.get('/burgers', function(req, res) {
    console.log("in /bugergs")
    db.Burger.findAll()
        .then(function(dbBurger) {
            console.log("###########", dbBurger);
            // into the main index, updating the page
            var hbsObject = { burger: dbBurger };
            return res.render("index", hbsObject);
        })
        .catch(function(err) {
            console.log("get all err:", err);
            return res.json(500);
        });
});


// Create a New Burger
router.post('/burger/create', function(req, res) {
    db.Burger.create({
            burger_name: req.body.burger_name
        })
        // pass the result of our call
        .then(function(dbBurger) {
            // log the result to our terminal/bash window
            console.log(dbBurger);
            // redirect
            res.redirect("/");
        })
        .catch(function(err) {
            console.log("create err:", err);
            return res.json(500);
        });
});


// Devour a Burger 
router.put('/burger/eat/:id', function(req, res) {
    console.log("\n#####~~~~~~~~~burger id", req.params.id)
    db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(dbBurger) {
            res.json("/");
        })
        .catch(function(err) {
            console.log("update err:", err);
            return res.json(500);
        });
});

// Export routes for server.js to use.
module.exports = router;