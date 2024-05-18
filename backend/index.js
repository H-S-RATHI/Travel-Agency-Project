import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js"
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import reviewRoute from "./routes/reviews.js"
import bookingRoute from "./routes/bookings.js"

dotenv.config()
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true
}

mongoose.set("strictQuery", false);
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("DB Connection Failed", error);
    }
};

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/tours', tourRoute)
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);

app.listen(port, () => {
    connect();
    console.log(`Server is running on port ${port}`)
})