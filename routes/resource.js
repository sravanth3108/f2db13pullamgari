var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var curriculum_controller = require('../Controllers/curriculum'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// curriculum ROUTES /// 
 
// POST request for creating a curriculum.  
router.post("/curriculum", ()=>{curriculum_controller.curriculum_create_post}); 
 
// DELETE request to delete curriculum. 
router.delete("/curriculum/:id",()=>{ curriculum_controller.curriculum_delete}); 
 
// PUT request to update curriculum. 
router.put("/curriculum/:id", ()=>{curriculum_controller.curriculum_update_put}); 
 
// GET request for one curriculum. 
router.get("/curriculum/:id", ()=>{curriculum_controller.curriculum_detail}); 
 
// GET request for list of all curriculum items. 
router.get("/curriculum", curriculum_controller.curriculum_list); 
 
module.exports = router; 