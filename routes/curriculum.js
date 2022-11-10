var express = require('express');
const curriculum_controlers= require('../controllers/curriculum');
var router = express.Router();
/* GET curriculums */
router.get('/', curriculum_controlers.curriculum_view_all_Page );
module.exports = router;