import { Router } from "express";
import {
  sendMessage,
  getAllMessages,
} from "../controllers/message.controllers";
import { protect } from "../middleware/authMiddleware";

const messageRouter = Router();

// Message Routes
messageRouter.post("/", protect, sendMessage);
messageRouter.get("/:chatId", protect, getAllMessages);

export default messageRouter;
