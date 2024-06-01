const { computeQuery } = require("../utils/computeQuery");
const getAllTeachers = async (req, res) => {
  try {
    const query = `SELECT name AS Teacher_Name, email AS Teacher_Email FROM TEACHERS`;
    const ans=await computeQuery(query);
    return { statusCode: 200, data: { teachers: results } };
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return { statusCode: 500, data: { message: "Internal server error" } };
  }
};

const updateTeacher = async (req, res) => {
  const teacherId = req.params.id;
  const { name, email,password } = req.body;

  if (!name || !email || !password) {
    return { statusCode: 400, data: { message: "All fields are required" } };
  }
  try {
    const query = `UPDATE TEACHERS SET name = ${name}, email = ${email}, password=${password} WHERE teacher_id = ${teacherId}  `;
    const ans=await computeQuery(query);
    return { statusCode: 200, data: { message: "Teacher updated successfully" } };
  } catch (error) {
    console.error("Error updating teacher:", error);
    return { statusCode: 500, data: { message: "Internal server error" } };
  }
};

const deleteTeacher = async (req, res) => {
  const teacherId = req.params.id;
  try {
    const query = `DELETE FROM TEACHERS WHERE teacher_id = ${[teacherId]}`;
    const ans=await deleteTeacher(query)
    return { statusCode: 200, data: { message: "Teacher deleted successfully" } };
  } catch (error) {
    console.error("Error deleting teacher:", error);
    return { statusCode: 500, data: { message: "Internal server error" } };
  }
};

module.exports = { getAllTeachers, updateTeacher, deleteTeacher };
