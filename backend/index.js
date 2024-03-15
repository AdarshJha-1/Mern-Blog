import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
mongoose
  .connect(`${process.env.MONGO_DB_URL}/Blog`)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => console.log(error));

app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
