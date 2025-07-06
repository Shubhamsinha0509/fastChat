import mongoose from "mongoose";

import { NODE_ENV, MONGODB_URI } from "../config/env.js";

if (!MONGODB_URI) {
  throw new Error(
    "Please define MONGODB_URI environment variable in .env.<development/production>.local"
  );
}

// Connect to DB

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting database", error);
  }
};

export default connectToDatabase;
