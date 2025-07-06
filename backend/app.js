import express from "express";
import cookieParser from "cookie-parser";

import { PORT } from "./config/env.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from node api");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

export default app;
