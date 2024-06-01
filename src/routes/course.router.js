const express = require("express");
const CourseRouter = express.Router();
const { CourseCreation, CourseUpdation, CourseDeletion } = require("../controllers/course.controller");
const { verifyJwt } = require("../middlewares/verifyJwt");

CourseRouter.post("/", verifyJwt, CourseCreation);
CourseRouter.put("/", verifyJwt, CourseUpdation);
CourseRouter.delete("/", verifyJwt, CourseDeletion);

module.exports = CourseRouter;
