import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({}, { timestamps: true });

export const Message = ("Message", messageSchema);
