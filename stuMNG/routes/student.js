const router = require('express').Router();
const studentController = require('../controller/studentController')

//ADD student 
router.post("/", studentController.addStudent);

//GET ALL
router.get("/", studentController.getAllStudents);

//GET STUDENT BY id
router.get("/:id", studentController.getAllStudents);

//DELETE
router.delete("/", studentController.delStudent);

//UPDATE
router.put("/:id", studentController.updateStudent);

module.exports = router