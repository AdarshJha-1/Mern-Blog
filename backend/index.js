import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
const app = express();

mongoose
  .connect(`${process.env.MONGO_DB_URL}/Blog`)
  .then(() => {
    console.log("MongoDB Connected");
  }).catch((error) => console.log(error))

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
