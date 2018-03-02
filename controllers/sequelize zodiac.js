var express = require('express');
 
var router = express.Router();

//import the model (burger.js) to use its database functions 
var db = require('../models')

// routes =========================================================

//index redirect 
router.get('/', function(req, res) {
    res.redirect('/alchemy')
});

//index page (render all alchemy to DOM)
router.get('/alchemy', function(req, res){
    console.log('in /alchemy')
    db.alchemy.findAll()
        .then(function(dbAlchemy){
            console.log('###########', dbAlchemy);
            //into the main index, updating the page
            var hbsObject = { alchemy: dbAlchemy };
            return res.render('index', hbsObject);
        })
        .catch(function(err){
            console.log('get all errors', err);
            return res.json(500);

        })
        // Original Attempt #1
        // db.alchemy.find({sign:1:req.body.sign:1}).then(function(results) {
        //     console.log(results)

        //     let Matches = {
        //         Matches: results
        //     }
        //     res.render("matches_display", Matches)
        // });

        // Possible solution #1
        var whereStatement = {};
        if (searchParams.id)
             whereStatement.id = searchParams.id;
        if(searchParams.username)
                whereStatement.username = {$like: '%' + searchParams.username + '%'};
        models.user.findAll({
            where: { whereStatement }
        });
// Page 1 needs to show the user their:
        //name 
        //age
        //gender
        //sign 
        //photo
//Page 2 the app needs to display the matches to the users sign 
        //if user = aries 



    // const Op = Sequelize.Op; 
    // db.alchemy.findAll({
    //     where: {
    //         sign: 1
    //     }
    // }).then(function(results) {
    //     console.log(results)

    //     let Matches = {
    //         Matches: results
    //     }
    //     res.render("matches_display", Matches)
    // });
        
        




});

 db.alchemy.findAll({

            }).then(function(results) {
                console.log(results)

                let Matches = {
                    Matches: results
                }
                res.render("matches_display", Matches)
            });

// Put a name in the Database
router.post('/alchemy/create', function(req, res){
    db.alchemy.create({
        username: req.body.username,
        sign: req.body.sign,
        gender: req.body.gender,
        age:req.body.age
    })
    // pass the result of our call 
    .then(function(dbAlchemy){
        // log the result to our bash window
        console.log(dbAlchemy);
        // redirect
        res.redirect("/");
    })
    .catch(function(err){
        console.log('create err', err);
        return res.json(500);
    });
});



module.exports = router;