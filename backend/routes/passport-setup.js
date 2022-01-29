const passport = require('passport');
var express = require("express")
var router = express.Router()
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const passportLocalMongoose = require("passport-local-mongoose");
const User = require('../models/user');
const user = require('../models/user');

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});









passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/yfest"
},
  function (accessToken, refreshToken, profile, done) {
    const data = profile._json;
    if (data.email.substring(data.email.indexOf('@') + 1) == "ahduni.edu.in" || data.hd == "ahduni.edu.in") {
      User.findOne({ "googleId": profile.id }, function (err, user) {
        console.log("Yeh to AU ka banda/bandi hai");
        if (err) return done(err);
        
        if (!user) {
          newUser = new User({
            username: data.email,
            googleId: profile.id,
            name: data.name,
            admin: false,
            image: data.picture
          });
          newUser.save((err) => {
            if (err) console.log(err)
            
            return done(err, newUser);
          });
        } else {
          return done(err, user);
        }
      })
    } else {
      return done();
    }
  }
));