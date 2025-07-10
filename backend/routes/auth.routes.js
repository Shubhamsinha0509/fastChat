

import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/sign-up", registerUser);
authRouter.post("/sign-in", loginUser);
authRouter.post("/log-out", (req, res, next) => {
  logoutUser(req, res, next);
});

export default authRouter;
