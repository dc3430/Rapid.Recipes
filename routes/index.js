var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/index', { title: 'Rapid Recipes' });
});

// The root route renders our only view
// router.get('/', function(req, res) {
//   res.redirect('/');
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
    successRedirect: '/users',
    failureRedirect: '/'
  }
));

//OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});

module.exports = router;
