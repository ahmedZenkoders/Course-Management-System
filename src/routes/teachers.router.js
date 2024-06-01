
const express = require("express");
const TeacherRouter = express.Router();
const {AllTeachers,UpdateTeacher,DeleteTeacher } = require("../controllers/teachers.controller");
TeacherRouter.get("/", AllTeachers);
TeacherRouter.put("/:id",UpdateTeacher)
TeacherRouter.delete("/:id",DeleteTeacher)

module.exports = TeacherRouter;
