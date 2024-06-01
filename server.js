const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const AuthRouter = require("./src/routes/auth.router");
const StudentRouter = require("./src/routes/students.router");
const TeacherRouter = require("./src/routes/teachers.router");
const EnrolmentRouter = require("./src/routes/enrolments.router");
const { initializeDb } = require("./src/utils/connectToDb");
const CourseRouter = require("./src/routes/course.router");
dotenv.config()
const PORT = 3100;

app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRouter);
app.use("/api/student", StudentRouter);
app.use("/api/teacher", TeacherRouter);
app.use("/api/course", CourseRouter);
app.use("/api/enrolments", EnrolmentRouter);

app.listen(PORT, async () => {
  console.log(`App is listening on PORT ${PORT}`);
});
