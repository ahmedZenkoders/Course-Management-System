const { computeQuery } = require('../utils/computeQuery');


const getAllStudents = async (req, res) => {

  try {
    const query = `SELECT name AS Student_Name, email AS Student_Email FROM students`;
    const ans = await computeQuery(query);
    return { statusCode: 200, data: { students: ans } };
  } catch (error) {
    console.error("Error fetching students:", error);
    return { statusCode: 500, data: { message: "Internal server error" } };
  }
};

const updateStudent = async (req, res) => {
  const studentId = req.params.id;
  const { name, email ,password} = req.body;

  if (!name || !email|| !password) {
    return { statusCode: 400, data: { message: "Name and email are required" } };
  }


  try {
    const query = `UPDATE STUDENTS SET name =${name}, email =${email},password=${password} WHERE student_id =${studentId}`;
    const ans=await computeQuery(query);
    return { statusCode: 200, data: { message: "Student updated successfully" } };
  } catch (error) {
    console.error("Error updating student:", error);
    return { statusCode: 500, data: { message: "Internal server error" } };
  }
};

const deleteStudent = async (req, res) => {
  const studentId = req.params.id; 
  try {
    const query = `DELETE FROM STUDENTS WHERE student_id = ${[studentId]}`;
    const ans=await computeQuery(query);
    return { statusCode: 200, data: { message: "Student deleted successfully" } };
  } catch (error) {
    console.error("Error deleting student:", error);
    return { statusCode: 500, data: { message: "Internal server error" } };
  }
};

module.exports = { getAllStudents, updateStudent, deleteStudent };
