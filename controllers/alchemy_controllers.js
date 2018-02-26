// Dependencies 
var express = require("express");

// Route
var router = express.Router();

// Import the model (alchemy.js) to use its database functions.
var alchemy = require("../models/alchemy.js");

// ===================== NEED TO FIX CRUD LOGIC BELOW =============== //

// ================= Create routes ================== //

// Index Redirect
router.get('/', function(req, res) {
    res.render('index');
});


// Index Page (renders all info to the DOM)
router.get('/index', function(req, res) {
    burger.selectAll('alchemy', function(data) {
        var hbsObject = { burgers: data };
        //console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


// POST & CREATE 
router.post('/alchemy/create', function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/index');
    });
});


// POST & UPDATE 
router.post('/alchemy/eat/:id', function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
});


// Export routes for server.js to use.
module.exports = router;