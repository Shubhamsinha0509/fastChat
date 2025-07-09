import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { PORT } from "./config/env.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import connectToDatabase from "./database/mongodb.js";

// Import routes
import chatRouter from "./routes/chat.routes.js";
import userRouter from "./routes/user.routes.js";
import messageRouter from "./routes/message.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from node api");
});


app.use("/api/chats", chatRouter);
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
