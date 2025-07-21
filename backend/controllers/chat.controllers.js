import asyncHandler from "express-async-handler";
import Chat from "../models/chat.models.js";

// Create or fetch one-on-one chat
export const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400);
    throw new Error("UserId is required");
  }

  const chat = await Chat.findOne({
    isGroupChat: false,
    users: { $size: 2, $all: [req.user._id, userId] },
  })
    .populate("users", "-password")
    .populate("latestMessage");

  if (chat) return res.status(200).json({ success: true, data: chat });

  const newChat = await Chat.create({
    chatName: "sender",
    isGroupChat: false,
    users: [req.user._id, userId],
  });

  const fullChat = await Chat.findById(newChat._id).populate("users", "-password");

  res.status(201).json({ success: true, data: fullChat });
});

// Fetch all user chats
export const fetchChats = asyncHandler(async (req, res) => {
  const chats = await Chat.find({
    users: { $in: [req.user._id] },
  })
    .populate("users", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 })
    .populate({
      path: "latestMessage",
      populate: { path: "sender", select: "username avatar email" },
    });

  res.status(200).json({ success: true, data: chats });
});

// Create group chat
export const createGroupChat = asyncHandler(async (req, res) => {
  const { users, name } = req.body;

  if (!users || !name) {
    res.status(400);
    throw new Error("Group name and users are required");
  }

  const groupChat = await Chat.create({
    chatName: name,
    users: [...users, req.user._id],
    isGroupChat: true,
    groupAdmin: req.user._id,
  });

  const fullGroupChat = await Chat.findById(groupChat._id).populate("users", "-password");

  res.status(201).json({ success: true, data: fullGroupChat });
});

// Rename group chat
export const renameGroup = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    { chatName },
    { new: true }
  ).populate("users", "-password");

  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat not found");
  }

  res.status(200).json({ success: true, data: updatedChat });
});

// Add member
export const addToGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    { $addToSet: { users: userId } },
    { new: true }
  ).populate("users", "-password");

  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat not found");
  }

  res.status(200).json({ success: true, data: updatedChat });
});

// Remove member
export const removeFromGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    { $pull: { users: userId } },
    { new: true }
  ).populate("users", "-password");

  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat not found");
  }

  res.status(200).json({ success: true, data: updatedChat });
});
