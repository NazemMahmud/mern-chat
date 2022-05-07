import express from "express";
import {handleValidation} from "../middlewares/index.js";
import {loginValidate} from "../validations/auth.validations.js";
import {AuthController} from "../controllers/Authentication/auth.controller.js";

const authRouter = express.Router();
// authRouter.post("/signup", handleValidation(authValidators.registrationValidate), AuthController.registration);
authRouter.post("/login", handleValidation(loginValidate), AuthController.login);
// LATER: registration email validation, refresh token

export default authRouter;
