import { Router } from "express";
import {
  sendMessage,
  getAllMessages,
} from "../controllers/message.controllers.js";
import { protect } from "../middleware/auth.middleware.js";

const messageRouter = Router();

messageRouter.post("/", protect, sendMessage);
messageRouter.get("/:chatId", protect, getAllMessages);

export default messageRouter;
