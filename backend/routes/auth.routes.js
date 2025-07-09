

import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/sign-up", registerUser);
authRouter.post("/log-in", loginUser);
authRouter.post("/log-out", (req, res, next) => {
  console.log("🔁 Logout route hit");
  logoutUser(req, res, next);
});

export default authRouter;
