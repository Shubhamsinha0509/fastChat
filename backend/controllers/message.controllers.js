import asyncHandler from "express-async-handler";
import Message from "../models/message.models.js";
import Chat from "../models/chat.models.js";
import User from "../models/user.models.js";

export const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.status(400).json({ success: false, message: "Missing content or chatId" });
  }

  let message = await Message.create({
    sender: req.user._id,
    content,
    chat: chatId,
  });

  message = await message
    .populate("sender", "username email avatar")
    .populate("chat");

  message = await User.populate(message, {
    path: "chat.users",
    select: "username email avatar",
  });

  await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

  res.status(201).json({ success: true, data: message });
});

export const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({ chat: req.params.chatId })
    .populate("sender", "username email avatar")
    .populate("chat");

  res.status(200).json({ success: true, data: messages });
});
