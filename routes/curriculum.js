var express = require('express');
const curriculum_controlers= require('../controllers/curriculum');
var router = express.Router();
/* GET curriculums */
router.get('/', curriculum_controlers.curriculum_view_all_Page );
/* GET detail curriculum page */ 
router.get('/detail/', curriculum_controlers.curriculum_view_one_Page); 
/* GET create curriculum page */ 
router.get('/create', curriculum_controlers.curriculum_create_Page); 
/* GET create update page */ 
router.get('/update', curriculum_controlers.curriculum_update_Page); 
module.exports = router;
