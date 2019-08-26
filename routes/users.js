var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//router.post('/', isLoggedIn, userCtrl.);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;
