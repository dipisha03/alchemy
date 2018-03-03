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

app.use(bodyParser.json());

// Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// var router = require('./controllers/alchemy_controllers.js');
// //app.get("/", function(req, res) { res.json("check") });
// app.use('/', router);
// app.use("/update", router);
// app.use("/create", router);

// app.listen(PORT, function() {
//     console.log("App now listening at localhost:" + PORT);
// });

var routes = require("./controllers/alchemy_controllers.js");
app.use("/", routes);
app.use("/create", routes);
db.sequelize.sync().then(function() {
    app.listen(PORT);
    console.log("App now listening at localhost:" + PORT);
});