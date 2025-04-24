import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { authRouter } from './auth/loginSignup';
import { ticketRouter } from './tickets/tickets';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI ;

app.use('/api/auth', authRouter);
app.use('/api/tickets', ticketRouter);

main = async () => {
    mongoose.connect(MONGO_URI)
    app.listen(PORT)
}
main().then(() => {
    console.log(`Server is running on port ${PORT}`);
}
).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
})