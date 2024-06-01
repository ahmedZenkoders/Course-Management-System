
const express = require("express");
const StudentRouter = express.Router();
const { AllStudents,UpdateStudent,DeleteStudent } = require("../controllers/students.controller");
StudentRouter.get("/", AllStudents);
StudentRouter.put("/:id",UpdateStudent)
StudentRouter.delete("/:id",DeleteStudent)

module.exports = StudentRouter;
