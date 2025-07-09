import { Router } from "express";
import {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} from "../controllers/chat.controllers.js";
import { protect } from "../middleware/auth.middleware.js";

const chatRouter = Router();

chatRouter.post("/", protect, accessChat);
chatRouter.get("/", protect, fetchChats);
chatRouter.post("/group", protect, createGroupChat);
chatRouter.put("/rename", protect, renameGroup);
chatRouter.put("/group-add", protect, addToGroup);
chatRouter.put("/group-remove", protect, removeFromGroup);

export default chatRouter;
