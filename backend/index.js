import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { authRouter } from './auth/loginSignup';
import { ticketRouter } from './tickets/tickets';
import { eventsRouter } from './tickets/events';
import { dashRouter } from './pages/dashboard';
import { tradeRouter } from './pages/tradeTickets';
import { myTicketsRouter } from './pages/mytickets';
import dotenv from 'dotenv';
import { settingsRouter } from './pages/settings';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI ;

app.use('/api/auth', authRouter);
app.use('/api/tickets', ticketRouter);
app.use('/api/events', eventsRouter);
app.use('/api/dashboard', dashRouter);
app.use('/api/tradeTickets', tradeRouter);
app.use('/api/myTickets', myTicketsRouter);
app.use('api/settings', settingsRouter)

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