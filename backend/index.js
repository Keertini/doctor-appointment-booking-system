import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import doctorRoute from "./routes/doctors.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

//  database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed");
  }
};

// for testing
app.get("/", (req, res) => {
  res.send("API is working");
});

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/doctors", doctorRoute);
app.use("/api/users", userRoute);
app.use("/api/review", reviewRoute);
app.use("/api/booking", bookingRoute);

app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});
