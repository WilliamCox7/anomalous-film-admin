const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const nconf = require('nconf');
const app = module.exports = express();

nconf.argv().env().file('keys.json');

app.set('port', (process.env.PORT || config.port));
app.use(session({
  secret: (config.secret || nconf.secret),
  saveUninitialized: false,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/build'));
app.use(cookieParser());

const PostService = require('./services/PostService');
const AuthService = require('./services/AuthService');

app.get('/post', PostService.getPost);

// auth

passport.use('local', new LocalStrategy(
  function(username, password, done) {
    AuthService.findUser({username: username}).then((user) => {
      if (user.length === 0) {
        return done(null, false);
      } else if (user[0].password != password) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    });
  }
));

passport.serializeUser(function(user, done) {
  return done(null, user);
});

passport.deserializeUser(function(user, done) {
  return done(null, user);
});

app.get('/auth', function(req, res) {
  if (!req.user) {
    res.status(200).send('No User');
  } else {
    res.status(200).send(req.user);
  }
})

app.post('/auth/login', passport.authenticate('local', {
  failureRedirect: '/login'
}), (req, res) => {
  res.status(200).send(req.user);
});

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.status(200).send('Logged Out');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'))
});

app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});
