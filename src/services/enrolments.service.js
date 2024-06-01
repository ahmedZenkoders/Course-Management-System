const { computeQuery } = require("../utils/computeQuery");

const enrolStudent = async (req, res) => {
  const { student_id, course_id } = req.body;

  if (!student_id || !course_code) {
    return { statusCode: 401, data: { message: "Fields are required" } };
  }


  try {
    const query = `INSERT INTO ENROLMENTS (student_id, course_id) VALUES (${student_id}, ${course_id})`;
    const ans=await computeQuery(query)
    return { statusCode: 201, data: { message: "Student Enrolled Successfully" } };
  } catch (error) {
    console.error("Error enrolling student:", error);
    return { statusCode: 500, data: { error: error.message } };
  }
};

const getEnrolment = async (req, res) => {
  const { student_id } = req.body;

  if (!student_id) {
    return { statusCode: 401, data: { message: "Student Id is required" } };
  }
  try {
    const query = `SELECT COURSES.course_id, COURSES.course_name FROM COURSES JOIN ENROLMENTS ON COURSES.course_id = ENROLMENTS.course_id WHERE Enrolments.student_id = ${student_id}`;
    const ans=computeQuery(query)

    if (ans.length >= 1) {
      return { statusCode: 200, data: { result } };
    } else {
      return { statusCode: 401, data: { message: "Record does not exist" } };
    }
  } catch (error) {
    console.error("Error retrieving enrolment:", error);
    return { statusCode: 500, data: { error: error.message } };
  }
};

const deleteEnrolment = async (req, res) => {
  const { student_id, course_id } = req.body;

  if (!student_id || !course_id) {
    return { statusCode: 401, data: { message: "Fields are required" } };
  }
  try {
    const query = `DELETE FROM ENROLMENTS WHERE student_id = ${student_id} AND course_id = ${course_id}`;
    const ans=await computeQuery(query);

    if (ans[0].affectedRows) {
      return { statusCode: 201, data: { message: "Enrolment deleted successfully" } };
    } else {
      return { statusCode: 401, data: { message: "An error occurred" } };
    }
  } catch (error) {
    console.error("Error deleting enrolment:", error);
    return { statusCode: 500, data: { error: error.message } };
  }
};

module.exports = { enrolStudent, getEnrolment, deleteEnrolment };
