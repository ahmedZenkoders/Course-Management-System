const {getAllTeachers, updateTeacher, deleteTeacher}=require("../services/teachers.service")

const AllTeachers = async (req, res) => {
  const result = await getAllTeachers(req, res);
  res.status(result.statusCode).json(result.data);
};

const UpdateTeacher=async (req,res)=>{
    const result=await updateTeacher(req,res)
    res.status(result.statusCode).json(result.data)
}

const DeleteTeacher=async (req,res)=>{
    const result=await deleteTeacher(req,res)
    res.status(result.statusCode).json(result.data)
}
module.exports = { AllTeachers,UpdateTeacher,DeleteTeacher };