import { Router } from "express";
import { getUserProfile, searchUsers } from "../controllers/user.controllers";
import { protect } from "../middleware/authMiddleware";

const userRouter = Router();

// User Routes
userRouter.get("/me", protect, getUserProfile);
userRouter.get("/", protect, searchUsers);

export default userRouter;
