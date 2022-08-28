import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json("vercel home page");
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log("app running in " + port));
