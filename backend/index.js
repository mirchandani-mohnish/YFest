const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const expressSession = require('express-session');
require('dotenv').config({path: __dirname + '/.env'});



// app initialization and middleware 
const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());




// Main get post requests and routing

app.get('/login', passport.authenticate("auth0", {scope: "openid email profile"}), function(req, res){
    res.redirect('/');
});

app.get("/callback", (req, res, next) => {
    passport.authenticate("auth0", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/login");
      }
    //   so essentially what we do here is we first check for error or if user is not new 
    //   once that is done we check if the user is logged in and auth is successful, we make a session 
    //   we then let user return to the session he was in "returnTo" or to home "/"

      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        const returnTo = req.session.returnTo;
        delete req.session.returnTo;
        res.redirect(returnTo || "/");
      });
    })(req, res, next);
});













//Oauth setup and use

const session = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
};

const strategy = new Auth0Strategy(
    {
        domain: process.env.DOMAIN,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.SECRET, 
        callbackURL: process.env.AUTH0_CALLBACK
    },
    function(accessToken, refreshToken, extraParams, profile, done){
        return done(null, profile);
    }
)



if (app.get("env") === "production") {
    session.cookie.secure = true; 
}












// Database and Port setup

const CONN_URL = `mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PWD}@cluster0.elyih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 3000


mongoose.connect(CONN_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {app.listen(PORT); console.log("server working");}).catch((e) => console.log(e.message));



