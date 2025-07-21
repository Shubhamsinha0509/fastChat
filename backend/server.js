import http from "http";

import { Server } from "socket.io";

import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const server = http.createServer(app)