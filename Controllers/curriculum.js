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
exports.curriculum_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: curriculum create POST'); 
}; 
 
// Handle curriculum delete form on DELETE. 
exports.curriculum_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: curriculum delete DELETE ' + req.params.id); 
}; 
 
// Handle curriculum update form on PUT. 
exports.curriculum_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: curriculum update PUT' + req.params.id); 
}; 
