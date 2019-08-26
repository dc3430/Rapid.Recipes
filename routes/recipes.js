var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');


router.get('/', recipesCtrl.index);

module.exports = router;