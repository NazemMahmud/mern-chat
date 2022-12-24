import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import { authenticated } from "../middlewares/authentication.middleware.js";

const userRouter = express.Router();

userRouter.get("/", authenticated, getAllUsers);

export default userRouter;
