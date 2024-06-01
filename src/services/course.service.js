const { computeQuery } = require("../utils/computeQuery");

const createCourse = async (req, res) => {
    const { id, name, description } = req.body;
    if (!id || !name || !description) {
        return { statusCode: 400, message: "All fields are required" };
    }
    try {
        const query = `INSERT INTO courses (id, name, description) VALUES (${id}, ${name}, ${description})`;
        const ans=await computeQuery(query)
        
        return { statusCode: 201, message: "Course created successfully", courseCode: id };
    } catch (error) {
        console.error("Error creating course:", error);
        return { statusCode: 500, message: "Internal server error" };
    }
};

const updateCourse = async (req, res) => {
    const { id, name, description } = req.body;
    if (!id || !name || !description) {
        return { statusCode: 400, message: "All fields are required" };
    }
    try {
        const query = `UPDATE courses SET name = ${name}, description = ${description} WHERE id = ${id}`;
        const ans=await computeQuery(query)
        return { statusCode: 200, message: "Course updated successfully", courseCode: id };
    } catch (error) {
        console.error("Error updating course:", error);
        return { statusCode: 500, message: "Internal server error" };
    }
};

const deleteCourse = async (req, res) => {
    const { id } = req.params.id;
    if (!id) {
        return { statusCode: 400, message: "Course id is required" };
    }
    try {
        const query = `DELETE FROM courses WHERE id = ${id}`;
        const ans=await computeQuery(query)
        return { statusCode: 200, message: "Course deleted successfully", courseCode: id };
    } catch (error) {
        console.error("Error deleting course:", error);
        return { statusCode: 500, message: "Internal server error" };
    }
};

module.exports = { createCourse, updateCourse, deleteCourse };
