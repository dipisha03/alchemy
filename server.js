// Dependencies 
var express = require('express');
var bodyParser = require('body-parser')

// Initiate Express 
var app = express();
// Setup port
var PORT = process.env.PORT || 6060;

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Handlebars 
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// ========= Need to figure out where this code goes =========== //

app.get("/second", function(request, response) {
    response.render("second")
});

app.get("/", function(request, response) {
    response.render("index", {
        person: [

            { name: '' },
        ]
    });
});

app.get("/", function(request, response) {
    response.render("index", {
        person: [

            { gender: '' },
        ]
    });
});

app.get("/", function(request, response) {
    response.render("index", {
        person: [

            { age: '' },
        ]
    });
});

app.get("/", function(request, response) {
    response.render("index", {
        person: [

            { sign: '' }
        ]
    });
});

// Need to add a box to upload photo (refer to MateFinder)

// ============================================================== //

// var router = require('./controllers/alchemy_controllers.js');
// //app.get("/", function(req, res) { res.json("check") });
// app.use('/', router);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});