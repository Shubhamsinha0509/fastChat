import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controllers";

const router = Router();

// Auth Routes
router.post("/sign-up", registerUser);
router.post("/log-in", loginUser);
router.post("/log-out", logoutUser);

export default router;
