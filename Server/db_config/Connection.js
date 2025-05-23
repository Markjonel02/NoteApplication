import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = () => {
  const MONGO_URI = process.env.VITE_MONGO_URL;

  if (!MONGO_URI) {
    console.error("MongoDB connection error: MONGO_URI is not defined.");
    process.exit(1);
  }

  mongoose
    .connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

export default connectDB;
