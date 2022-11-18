var curriculum = require('../models/curriculum'); 
 
// List of all curriculums 
exports.curriculum_list = async function(req, res) { 
    try{ 
       let thecurriculums = await curriculum.find(); 
        res.send(thecurriculums); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// for a specific curriculum. 
// for a specific curriculum. 
exports.curriculum_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await curriculum.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
  
// Handle curriculum create on POST.
// Handle curriculum create on POST. 
exports.curriculum_create_post = function(req, res) { 
    
    console.log(req.body) ;
    let document = new curriculum(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"curriculum_type":"goat", "cost":12, "size":"large"} 
   // document.courseName = req.body.courseName; 
    //document.department = req.body.department; 
    //document.credits = req.body.credits; 
    document.courseName = req.body.courseName; 
    document.department = req.body.department; 
    document.credits = req.body.credits; 
    try{ 
        let result = document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle curriculum delete form on DELETE. 
exports.curriculum_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await curriculum.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle curriculum update form on PUT. 
exports.curriculum_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: curriculum update PUT' + req.params.id); 
}; 

// VIEWS
// Handle a show all view
exports.curriculum_view_all_Page = async function(req, res) {
    try{
    thecurriculums = await curriculum.find();
    res.render('curriculum', { title: 'curriculum Search Results', results: thecurriculums });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

 
 // Handle a show one view with id specified by query 
 exports.curriculum_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await curriculum.findById( req.query.id) 
        res.render('curriculumdetail',  { title: 'Curriculum Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a curriculum. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.curriculum_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('curriculumcreate', { title: 'curriculum Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
//Handle building the view for updating a curriculum. 
// query provides the id 
exports.curriculum_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await curriculum.findById(req.query.id) 
        res.render('curriculumupdate', { title: 'curriculum Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.curriculum_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await curriculum.findById(req.query.id) 
        res.render('curriculumdelete', { title: 'curriculum Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 

