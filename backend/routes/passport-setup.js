const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const user = require('../models/user');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  
  done(null, user);
  
});



passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://localhost:3000/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  user.findOne({googleId: profile.id}).then((currentUser) => {
    if(currentUser){
      console.log("record Exists");
    }else{
      const {useremail, verified} = profile.emails
      new user({
        username: profile.displayName,
        googleId: profile.id,
        emailId: useremail
      }).save().then(() => {console.log(profile)})
    }
  })
  
  return done(null, profile);
}
));


// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });
  
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
// });



// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "https://localhost:3000/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));