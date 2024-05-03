import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/booking.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true
}

mongoose.set('strictQuery', false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO__URI);

        console.log("database connected")
    } catch (error) {
        console.log("database not connected")
    }
    }
    


app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('api/vi/auth', authRoute)
app.use("api/vi/tours", tourRoute);
app.use("api/vi/users", userRoute);
app.use("api/vi/review", reviewRoute);
app.use("api/vi/booking", bookingRoute);




app.listen(port, () => {
    connect();
    console.log("server running on port ", port)
})