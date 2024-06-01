const express = require("express");
const AuthRouter = express.Router();
const { loginUserController,registerUserController } = require("../controllers/auth.controller");
AuthRouter.post("/login", loginUserController);
AuthRouter.post("/register", registerUserController);

module.exports = AuthRouter;
