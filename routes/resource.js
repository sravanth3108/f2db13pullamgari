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
    // {"curriculum_type":"goat", "cost":12, "size":"large"} 
    document.courseName = req.body.courseName; 
   document.department = req.body.department; 
   document.credits = req.body.credits; 
   // document.curriculum_type = req.body.curriculum_type; 
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
router.delete("/curriculum/:id",async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await curriculum.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}); 
 
// PUT request to update curriculum. 
router.put("/curriculum/:id",  async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await curriculum.findById( req.params.id)
    // Do updates of properties
    if(req.body.courseName) 
    toUpdate.courseName = req.body.courseName;
    if(req.body.department) toUpdate.department = req.body.department;
    if(req.body.credits) toUpdate.credits = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
   });
    
 
// GET request for one curriculum. 
router.get("/curriculum/:id", async function(req, res) {
    console.log("detail " + req.params.id)
    try {
    result = await curriculum.findById( req.params.id)
    console.log(result);
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }); 
 
// GET request for list of all curriculum items. 
router.get("/curriculum", curriculum_controller.curriculum_list); 
 
module.exports = router; 