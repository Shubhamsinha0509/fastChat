import { Router } from "express";
import {
  getUserProfile,
  searchUsers,
} from "../controllers/user.controllers.js";
import { protect } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/me", protect, getUserProfile);
userRouter.get("/", protect, searchUsers);

export default userRouter;