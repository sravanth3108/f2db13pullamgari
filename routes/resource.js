var express = require('express'); 
var router = express.Router(); 
var curriculum = require('../models/curriculum'); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var curriculum_controller = require('../Controllers/curriculum'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// curriculum ROUTES /// 
 
// POST request for creating a curriculum.  
router.post("/curriculum", async (req, res)=>{  
    console.log(req.body) ;
    let document = new curriculum(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.courseName = req.body.courseName; 
   document.department = req.body.department; 
   document.credits = req.body.credits; 
   // document.costume_type = req.body.costume_type; 
    //document.cost = req.body.cost; 
    //document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   }); 
 
// DELETE request to delete curriculum. 
router.delete("/curriculum/:id",()=>{ curriculum_controller.curriculum_delete}); 
 
// PUT request to update curriculum. 
router.put("/curriculum/:id", ()=>{curriculum_controller.curriculum_update_put}); 
 
// GET request for one curriculum. 
router.get("/curriculum/:id", ()=>{curriculum_controller.curriculum_detail}); 
 
// GET request for list of all curriculum items. 
router.get("/curriculum", curriculum_controller.curriculum_list); 
 
module.exports = router; 