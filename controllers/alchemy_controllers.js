// ====================== Dependencies ======================== //

// Import the models to use its database functions 
var db = require('../models');
// Initiate Express 
var express = require("express");
// Require passport 
var passport = require('passport');
// Define router
var router = express.Router();
// Require sequelize 
var Sequelize = require('sequelize');
var Op = Sequelize.Op;

// ====================== HTML Routes ========================= // 

// User authentication 
router.get("/", function(req, res) {
    var hdblbrs = {
        isLoggedIn: req.isAuthenticated()
    }
    res.render("index", hdblbrs)
})

router.get("/account", function(req, res) {
    //var id = getCurrentuserId(req);

    console.log("account")
    var hdblbrs = {
        isLoggedIn: req.isAuthenticated(),
    }
    if (req.isAuthenticated()) {
        var id = req.session.passport.user
        console.log(req.session.passport)
        console.log(req.session)
            // Find one by id 

        //Console.log(id)
        db.User.findById(id).then(user => {
            console.log(user.dataValues)
                // Get current user info 
            hdblbrs["name"] = user.dataValues.name;
            hdblbrs["sign"] = user.dataValues.sign;
            hdblbrs["image"] = user.dataValues.image;

            // Get the matches for user sign
            db.Signs.findOne({ where: { sign: hdblbrs.sign } }).then(sign => {
                console.log(sign.dataValues.matches)
                var matchArr = sign.dataValues.matches
                hdblbrs["matches"] = matchArr.split(",");
                console.log("###", hdblbrs);
                res.render("second", hdblbrs);
                var choices = []
                hdblbrs.matches.forEach(function(match) {
                    var choice = { sign: match }
                    console.log(choice)
                    choices.push(choice)
                })
                db.User.findAll({
                    where: {
                        [Sequelize.Op.or]: choices
                    }
                }).then(user => {
                    console.log(user.dataValues)
                })
            })

        })

    } else {
        res.render("index", hdblbrs);
    }

})

// ======================== API Routes ======================= // 

// Process the signup form ===================================
//============================================================

router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
        if (err) {
            //console.log("passport err", err)
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (!user) {
            return res.send({ success: false, message: 'authentication failed' });
        }

        // ***********************************************************************
        // "Note that when using a custom callback, it becomes the application's
        // responsibility to establish a session (by calling req.login()) and send
        // a response."
        // Source: http://passportjs.org/docs
        // ***********************************************************************

        req.login(user, loginErr => {
            if (loginErr) {
                //console.log("loginerr", loginerr)
                return next(loginErr);
            }

            //console.log('redirecting....');
            var status = {
                code: 200,
                isLoggedIn: true,
                userId: user.dataValues.id,
                username: user.dataValues.name,
                userSign: user.dataValues.sign
            }
            res.json(status);

        });
    })(req, res, next);
});


router.post('/login', function(req, res, next) {

    passport.authenticate('local-login', function(err, user, info) {
        if (err) {
            //console.log("passport err", err)
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (!user) {
            return res.send({ success: false, message: 'authentication failed' });
        }

        // ***********************************************************************
        // "Note that when using a custom callback, it becomes the application's
        // responsibility to establish a session (by calling req.login()) and send
        // a response."
        // Source: http://passportjs.org/docs
        // ***********************************************************************

        req.login(user, loginErr => {
            if (loginErr) {
                //console.log("loginerr", loginErr)
                return next(loginErr);
            }
            //var userId = user.dataValues.id;
            //console.log('redirecting....')
            var userName = user.dataValues.name;
            var status = {
                code: 200,
                isLoggedIn: true,
                userId: user.dataValues.id,
                username: user.dataValues.name,
                userSign: user.dataValues.sign
            }
            res.json(status);

        });
    })(req, res, next);
});

// Logout of user account
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

function getCurrentuserId(req) {
    var userId;
    if (req.isAuthenticated()) {
        userId = req.session.passport.user;
    } else {
        userId = false
    }
    return userId
}

//Edge casing for wild card
router.get("*", function(req, res, next) {
    if (req.url.indexOf('/api') == 0) return next();
    if (req.url.indexOf('/assets') == 0) return next();
    if (req.url.indexOf('/css') == 0) return next();
    res.render("index");
});

// Export Router
module.exports = router;