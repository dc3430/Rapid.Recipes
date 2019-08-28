var express = require('express');
var router = express.Router();
var categoriesCtrl = require('../controllers/categories');

router.get('/', categoriesCtrl.index); //home page = recipe.index
router.post('/create', categoriesCtrl.create);//- /direct back home, then /create direct you to the create page
router.delete('/:id', categoriesCtrl.delete)


module.exports = router;