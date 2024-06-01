const express = require("express");
const EnrolmentRouter = express.Router();
const { EnrollingStudent,GetEnrolment,DeleteEnrolment } = require("../controllers/enrolment.controller");
EnrolmentRouter.post("/addEnrolment", EnrollingStudent);
EnrolmentRouter.post("/getEnrolment", GetEnrolment);
EnrolmentRouter.delete("/", DeleteEnrolment);
module.exports = EnrolmentRouter;
