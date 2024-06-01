const {loginUser } = require("../services/auth.service");
const { registerUser } = require("../services/auth.service");

const loginUserController = async (req, res) => {
  const result = await loginUser(req, res);
  res.status(result.statusCode).json(result.data);
};
const registerUserController = async (req, res) => {
  const result = await registerUser(req, res);
  res.status(result.statusCode).json(result.data);
};
module.exports = { loginUserController,registerUserController };
