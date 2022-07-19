import express from "express";
import { handleValidation } from "../middlewares/index.js";
import { loginValidate, registrationValidate } from "../validations/auth.validations.js";
import { AuthController } from "../controllers/Authentication/auth.controller.js";
import {authenticated} from "../middlewares/authGuard.middleware.js";

const authRouter = express.Router();
authRouter.post("/signup", handleValidation(registrationValidate), AuthController.registration);
authRouter.post("/login", handleValidation(loginValidate), AuthController.login);
authRouter.post("/logout", authenticated, AuthController.login);
// LATER: registration email validation, refresh token

export default authRouter;
