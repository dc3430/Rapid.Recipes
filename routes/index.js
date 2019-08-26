var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexCtrl = require('../controllers/index');

/* GET home page. */
router.get('/', indexCtrl.index);


// router.get('/', function(req, res, next) {
//   res.redirect('/index');
// });

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
    failureRedirect: '/'
  }
));

//OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
