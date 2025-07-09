import asyncHandler from "express-async-handler";
import User from "../models/user.models.js";

export const getUserProfile = asyncHandler(async (req, res) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar,
  });
});

export const searchUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        name: { $regex: req.query.search, $options: "i" },
      }
    : {};

  const users = await User.find({
    ...keyword,
    _id: { $ne: req.user._id },
  });

  res.json(users);
});
