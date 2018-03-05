// Set up ======================================================

var express = require('express')
var methodO = require("method-override");
var bodyParser = require('body-parser')


var app = express();
var PORT = process.env.PORT || 6060;

var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session'); // cookie session


// Configuration ==============================================

// Import models
var db = require("./models");

require('./config/passport')(passport); // pass passport for configuration

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(function(err, req, res, next) {
    console.log(err);
});


// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Session secret set to a random long mix of keys
app.use(session({
    key: 'user_sid',
    resave: true,
    secret: '}wmpB2uLMMYu>Kt4#9.CDttvp=4KYq9rVfWP',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000,
        httpOnly: false
    }
}));

// Set up passport
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
app.use(methodO("_method"));


// Routes ======================================================

// routes to be listening for
var routes = require("./controllers/alchemy_controllers.js");
app.use("/", routes);
app.use("/signup", routes);
app.use("/login", routes);
app.use("/logout", routes);
app.use("/account", routes);


// Launch ======================================================

// Sycn db and listen for port 6060 or set port
db.sequelize.sync().then(function() {
    app.listen(PORT);
    console.log("App now listening at localhost:" + PORT);
});