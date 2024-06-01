const { createCourse, updateCourse, deleteCourse } = require("../services/course.service");

const CourseCreation = async (req, res) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: 'Admin access required' });
  }
  const result = await createCourse(req, res);
  res.status(result.statusCode).json({ message: 'Admin access granted', result: result });
};

const CourseUpdation = async (req, res) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: 'Admin access required' });
  }
  const result = await updateCourse(req, res);
  res.status(result.statusCode).json({ message: 'Admin access granted', result: result });
};

const CourseDeletion = async (req, res) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: 'Admin access required' });
  }
  const result = await deleteCourse(req, res);
  res.status(result.statusCode).json({ message: 'Admin access granted', result: result });
};

module.exports = { CourseCreation, CourseUpdation, CourseDeletion };
