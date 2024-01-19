import express from "express";

const app = express();
const PORT = 4000;

app.use("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
