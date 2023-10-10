const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const newsRouter = require("./routes/newsRoutes");
const { default: mongoose } = require("mongoose");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
// Middleware for parsing json.
app.use(express.json());
dotenv.config({ path: "./config.env" });

//? Database Connection
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(() => console.log("Successfully DB connected"))
  .catch((err) => console.log("Problem in connecting Database", err));

// Mounting the Router | userRouter is middleware
app.use("/api/v1/users", userRouter);

app.use("/api/v1/news", newsRouter);

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;

// This file has Router Mounted and Database Connection
