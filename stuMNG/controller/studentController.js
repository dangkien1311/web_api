const {Student} = require('../model/model');

const studentController = {
    //ADD student
    addStudent: async (req,res) => {
        // res.status(200).json(req.body);
        try {
            const NewStudent = new Student(req.body);
            const savedStudent = await  NewStudent.save();
            res.status(200).json(savedStudent)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //GET ALL students
    getAllStudents: async (req, res) => {
        try {
            const Students = await  Student.find();
            res.status(200).json(Students)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //GET students by id
    getAllStudents: async (req, res) => {
        try {
            const Students = await  Student.findById(req.params.id);
            res.status(200).json(Students)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //DELETE STUDENT BY ID
    delStudent: async (req,res) => {
        try {
            await Student.findByIdAndDelete(req.body);
            res.status(200).json("DELETE SUCCESSFUL")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //UPDATE STUDENT BY ID
    updateStudent: async (req,res) => {
        try {
            await Student.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json("UPDATE SUCCESSFUL")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    
};
 
module.exports = studentController;