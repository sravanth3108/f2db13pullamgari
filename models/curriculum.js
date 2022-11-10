const mongoose = require("mongoose")
const curriculumSchema = mongoose.Schema({
    courseName:String,
     department:String,
    credits:Number,
})
module.exports = mongoose.model("Curriculum",curriculumSchema)