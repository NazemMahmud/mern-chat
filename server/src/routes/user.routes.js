import express from "express";
import {getAllUsers, getUsersWithLastConversationMessage} from "../controllers/user.controller.js";
import { authenticated } from "../middlewares/authentication.middleware.js";

const userRouter = express.Router();

userRouter.get("/", authenticated, getAllUsers);
userRouter.get("/conversation-message", authenticated, getUsersWithLastConversationMessage);

export default userRouter;
