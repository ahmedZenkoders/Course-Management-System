const {getAllStudents, updateStudent, deleteStudent}=require("../services/student.service")

const AllStudents = async (req, res) => {
  const result = await getAllStudents(req, res);
  res.status(result.statusCode).json(result.data);
};

const UpdateStudent=async (req,res)=>{
    const result=await updateStudent(req,res)
    res.status(result.statusCode).json(result.data)
}

const DeleteStudent=async (req,res)=>{
    const result=await deleteStudent(req,res)
    res.status(result.statusCode).json(result.data)
}
module.exports = { AllStudents,UpdateStudent,DeleteStudent };