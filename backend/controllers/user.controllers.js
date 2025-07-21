import asyncHandler from "express-async-handler";
import User from "../models/user.models.js";

// Get logged-in user profile
export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      avatar: req.user.avatar,
    },
  });
});

// Search users
export const searchUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search?.trim();

  const filter = keyword
    ? {
        username: { $regex: keyword, $options: "i" },
        _id: { $ne: req.user._id },
      }
    : { _id: { $ne: req.user._id } };

  const users = await User.find(filter).select("-password");

  res.status(200).json({
    success: true,
    results: users.length,
    data: users,
  });
});
