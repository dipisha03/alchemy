// =================== Dependencies ====================== //
var express = require('express');

var router = express.Router();

// Import the model (burger.js) to use its database functions 
var db = require('../models')

// ====================== Routes ========================= // 

router.get("/", function(req, res) {
    res.render("index")
})

router.post("/create", function(req, res) {
        console.log(req.body);
        res.json(req.body);
    })
    // router.get("/second", function(req, res) {
    //     response.render("second")
    // });

// router.get("/", function(req, res) {
//     response.render("index", {
//         person: [

//             { name: '' },

//         ]
//     });

// });

// router.get("/", function(req, res) {
//     response.render("index", {
//         person: [

//             { age: '' },

//         ]
//     });

// });

// router.get("/", function(req, res) {
//     response.render("index", {
//         person: [

//             { sign: '' }

//         ]
//     });

// });

// router.get('/test', function(
//     req, res) {
//     response.json('test worked')
// });

// // Index redirect 
// router.get('/', function(req, res) {
//     res.redirect('/alchemy')
// });

// // Index page (render all alchemy to DOM)
// router.get('/alchemy', function(req, res) {
//     console.log('in /alchemy')
//     db.alchemy.findAll()
//         .then(function(dbAlchemy) {
//             console.log('###########', dbAlchemy);
//             //into the main index, updating the page
//             var hbsObject = { alchemy: dbAlchemy };
//             return res.render('index', hbsObject);
//         })
//         .catch(function(err) {
//             console.log('get all errors', err);
//             return res.json(500);

//         })


//     // =============================== Test ========================= //
//     // Original Attempt #1
//     // db.alchemy.find({sign:1:req.body.sign:1}).then(function(results) {
//     //     console.log(results)

//     // let Matches = {
//     //      Matches: results
//     //          }
//     //     res.render("matches_display", Matches)
//     // });

//     // Possible solution #1
//     // searchParams

//     // =============================================================== //

//     // Usersign1 = aries matches 
//     if (searchParams.id = usersign1)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5, match6 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5, match6)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5,
//                 match6
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign2 = leo matches
//     if (searchParams.id = usersign2)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign3 = sagittarius matches
//     if (searchParams.id = usersign3)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5, match6 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5, match6)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5,
//                 match6
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign4 = taurus matches
//     if (searchParams.id = usersign4)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5, match6 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5, match6)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5,
//                 match6
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign5 = virgo matches
//     if (searchParams.id = usersign5)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5,
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign6 = capricorn matches
//     if (searchParams.id = usersign6)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5, match6 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5, match6)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5,
//                 match6
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign7 = gemini matches
//     if (searchParams.id = usersign7)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5,
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign8 = libra matches
//     if (searchParams.id = usersign8)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign9 = aquarius matches
//     if (searchParams.id = usersign9)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5, match6 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5, match6)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5,
//                 match6
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign10 = cancer matches
//     if (searchParams.id = usersign10)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5, match6 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5, match6)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5,
//                 match6
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign11 = scorpio matches
//     if (searchParams.id = usersign11)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5, match6 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5, match6)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5,
//                 match6
//             }
//             res.render("matches_display", Matches)
//         });

//     // Usersign12 = pisces matches
//     if (searchParams.id = usersign12)
//         models.user.findAll({
//             where: { match1, match2, match3, match4, match5 }
//         }).then(function(results) {
//             console.log(match1, match2, match3, match4, match5)

//             let Matches = {
//                 Matches: match1,
//                 match2,
//                 match3,
//                 match4,
//                 match5
//             }
//             res.render("matches_display", Matches)
//         });


//     const Op = Sequelize.Op;
//     db.alchemy.findAll({
//         where: {
//             sign: user
//         }
//     }).then(function(results) {
//         console.log(results)

//         let Matches = {
//             Matches: results
//         }
//         res.render("matches_display", Matches)
//     });

// });

// db.alchemy.findAll({

// }).then(function(results) {
//     console.log(results)

//     let Matches = {
//         Matches: results
//     }
//     res.render("matches_display", Matches)
// });

// // Put a name in the Database
// router.post('/alchemy/create', function(req, res) {
//     db.alchemy.create({
//             username: req.body.username,
//             gender: req.body.gender,
//             sign: req.body.sign,
//             // age: req.body.age
//         })
//         // pass the result of our call 
//         .then(function(dbAlchemy) {
//             // log the result to our bash window
//             console.log(dbAlchemy);
//             // redirect
//             res.redirect("/");
//         })
//         .catch(function(err) {
//             console.log('create err', err);
//             return res.json(500);
//         });
// });



module.exports = router;