import asyncHandler from "express-async-handler";
import User from "../models/user.models.js";
import Chat from "../models/chat.models.js";
import Message from "../models/message.models.js";

// Send a message
export const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.status(400).send("Missing content or chatId");
  }

  let message = await Message.create({
    sender: req.user._id,
    content,
    chat: chatId,
  });

  message = await message.populate("sender", "username email avatar");
  message = await message.populate("chat");
  message = await User.populate(message, {
    path: "chat.members",
    select: "username email avatar",
  });

  await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

  res.status(201).json(message);
});


export const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({ chat: req.params.chatId })
    .populate("sender", "username email avatar")
    .populate("chat");

  res.json(messages);
});
