var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/recipes');
});

//Goolge OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google Oauth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/recipes',
    failureRedirect: '/'
  }
));

//OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/'); // go back to a PUBLIC route
});

module.exports = router;
