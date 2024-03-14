import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
const app = express();
import userRoutes from './routes/user.route.js'
mongoose
  .connect(`${process.env.MONGO_DB_URL}/Blog`)
  .then(() => {
    console.log("MongoDB Connected");
  }).catch((error) => console.log(error))

  app.use('/api/user', userRoutes)

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
