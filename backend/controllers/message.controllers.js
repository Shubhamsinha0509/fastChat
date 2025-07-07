import asyncHandler from "express-async-handler";
import { User } from "../models/user.models";
import { Chat } from "../models/chat.models";
import { Message } from "../models/message.models";

// Send a message
// POST/api/messages
// @access Private
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

  message = await message.populate("sender", "name email avatar");
  message = await message.populate("chat");
  message = await User.populate(message, {
    path: "chat.users",
    select: "name email acatar",
  });

  // update latestMessage field in chat
  await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

  res.status(201).json(message);
});

// Get all messages for a chat
// GET/api/messages/:id
// @access private
export const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({ chat: req.params.chatId })
    .populate("sender", "name email avatar")
    .populate("chat");

  res.json(messages);
});
