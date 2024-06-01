const {
  enrolStudent,getEnrolment,deleteEnrolment} = require("../services/enrolments.service");

const EnrollingStudent = async (req, res) => {
  const result = await enrolStudent();
  res.status(result.statusCode).json(result.data);
};

const GetEnrolment = async (req, res) => {
  const result = await getEnrolment();
  res.status(result.statusCode).json(result.data);
};

const DeleteEnrolment = async (req, res) => {
  const result = await deleteEnrolment();
  res.status(result.statusCode).json(result.data);
};

module.exports = { EnrollingStudent, GetEnrolment, DeleteEnrolment };
