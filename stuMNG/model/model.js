const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type : String, 
        required: true
    },
    StudentCode: {
        type : Number, 
        required: true

    },
    DateOb : {
        type : String,
        required: true
    },
    HomeTown : {
        type : String,
        required: true
    }
})

let Student = mongoose.model('Student', studentSchema);

module.exports = { Student };