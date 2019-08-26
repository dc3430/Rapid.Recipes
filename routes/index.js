var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/recipes');
});

// The root route renders our only view
// router.get('/', function(req, res) {
//   res.redirect('/recipes');
// })

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
    failureRedirect: '/recipes'
  }
));

//OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/recipes');
});

module.exports = router;
