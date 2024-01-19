import express from "express";
import { config } from "dotenv";

config({
  path: "./config/config.env",
});
const app = express();

app.use("/", (req, res) => {
  res.json({ message: "Hello Engineer" });
});

export default app;
