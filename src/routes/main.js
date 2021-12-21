
// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const validate = require('../middlewares/validate');

router.get('/', mainController.index); 

router.get('/admin', mainController.admin); 
router.get('/validate', validate, mainController.adminWelcome);

router.get('/services', mainController.services);

router.get('/services/design', mainController.design);




module.exports = router;