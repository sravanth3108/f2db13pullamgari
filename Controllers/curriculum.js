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
exports.curriculum_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: curriculum detail: ' + req.params.id); 
}; 
 
// Handle curriculum create on POST.
// Handle Costume create on POST. 
exports.curriculum_create_post = function(req, res) { 
    
    console.log(req.body) ;
    let document = new curriculum(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
   // document.courseName = req.body.courseName; 
    //document.department = req.body.department; 
    //document.credits = req.body.credits; 
    document.costume_type = req.body.costume_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
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
exports.curriculum_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: curriculum delete DELETE ' + req.params.id); 
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