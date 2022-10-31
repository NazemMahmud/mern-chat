import express from "express";
// import { handleValidation } from "../middlewares/index.js";
// import { loginValidate, registrationValidate } from "../validations/auth.validations.js";
import { getAllUsers } from "../controllers/user.controller.js";
import { authenticated } from "../middlewares/authentication.middleware.js";

const userRouter = express.Router();
// userRouter.post("/signup", handleValidation(registrationValidate), registration);
// userRouter.post("/login", handleValidation(loginValidate), login );
userRouter.get("/", authenticated, getAllUsers);

export default userRouter;
