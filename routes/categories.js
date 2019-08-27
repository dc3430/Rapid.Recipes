var express = require('express');
var router = express.Router();
var categoriesCtrl = require('../controllers/categories');

router.get('/', categoriesCtrl.index);



module.exports = router;