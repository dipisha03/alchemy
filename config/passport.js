// Load all the things we require
var LocalStrategy = require('passport-local').Strategy;

// Load up the user model
var db = require('../models');

// Expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // Used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // Used to deserialize the user
    passport.deserializeUser(function(id, done) {
        db.User.findById(id).then(function(user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // We are using named strategies since we have one for login and one for signup
    // By default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email

            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback

        },
        function(req, email, password, done) {

            // Asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function() {

                // Find a user whose email is the same as the forms email
                // We are checking to see if the user trying to login already exists
                db.User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user, err) {
                    if (err) return done(err);

                    // Check to see if there's already a user with that email
                    if (user) {
                        console.log('signupMessage', 'That email is already taken.');
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        // if there is no user with that email
                        // create the user
                        db.User.create({
                            name: req.body.name,
                            email: req.body.email,
                            image: req.body.image,
                            sign: req.body.sign,
                            preference: req.body.preference,
                            localPassword: db.User.generateHash(password)

                        }).then(function(dbUser) {
                            //console.log("created result: ", dbUser);
                            // send post back to render
                            return done(null, dbUser);

                        }).catch(function(err) {
                            // handle error;
                            console.log(err);
                        });
                    }
                });

            });

        }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // We are using named strategies since we have one for login and one for signup
    // By default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
            // By default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form
            // Console.log("\n>>>>>>>>>>>>>> localsignin: ", req);
            // Find a user whose email is the same as the forms email
            // We are checking to see if the user trying to login already exists
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(function(user, err) {
                // If there are any errors, return the error before anything else
                if (err)
                    return done(err);

                // If no user is found, return the message
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

                // If the user is found but the password is wrong
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                // All is well, return successful user
                return done(null, user);
            });

        }));

};