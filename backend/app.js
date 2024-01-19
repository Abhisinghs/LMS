import express from "express";
import { config } from "dotenv";
import course from "./routes/Course.route.js";

//set path of config file
config({
  path: "./config/config.env",
});

//make instance of express
const app = express();

//using middleware

//importing and using routes
app.use("/api/v1", course);

app.use("/", (req, res) => {
  res.json({ message: "Hello Engineer" });
});

export default app;
