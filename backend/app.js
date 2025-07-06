import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from node api");
});

app.listen(PORT, async () => {
  console.log(`server is running on http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;
