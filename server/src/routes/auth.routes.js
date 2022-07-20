import express from "express";
import { handleValidation } from "../middlewares/index.js";
import { loginValidate, registrationValidate } from "../validations/auth.validations.js";
import { registration, login, logout } from "../controllers/Authentication/auth.controller.js";
import { authenticated } from "../middlewares/authentication.middleware.js";

const authRouter = express.Router();
authRouter.post("/signup", handleValidation(registrationValidate), registration);
authRouter.post("/login", handleValidation(loginValidate), login );
authRouter.post("/logout", authenticated, logout);
// LATER: registration email validation, refresh token

export default authRouter;
