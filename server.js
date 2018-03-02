// ========== Dependencies ============ //

var express = require('express')
var bodyParser = require('body-parser')

var db = require("./models");

// Setup express app
var app = express();
// Setup port 
var PORT = process.env.PORT || 6060;

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// var router = require('./controllers/burgers_controller.js');
//app.get("/", function(req, res) { res.json("check") });
// app.use('/', router);
// app.use("/update", router);
// app.use("/create", router);

var yasroutes = require("./controllers/yasroutes");
app.use("/", yasroutes);

// app.listen(PORT, function() {
//     console.log("App now listening at localhost:" + PORT);
// });

db.sequelize.sync().then(function() {
    app.listen(PORT);
    console.log("App now listening at localhost:" + PORT);
});

console.log("um what?")