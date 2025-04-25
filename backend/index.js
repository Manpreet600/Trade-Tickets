import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { authRouter } from './auth/loginSignup.js';
import { ticketRouter } from './tickets/tickets.js';
import { eventsRouter } from './tickets/events.js';
import { dashRouter } from './pages/dashboard.js';
import { tradeRouter } from './pages/tradeTickets.js';
import { myTicketsRouter } from './pages/mytickets.js';
import dotenv from 'dotenv';
import { settingsRouter } from './pages/settings.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI ;

app.use('/api/auth', authRouter);
app.use('/api/tickets', ticketRouter);
app.use('/api/events', eventsRouter);
app.use('/api/dashboard', dashRouter);
app.use('/api/tradeTickets', tradeRouter);
app.use('/api/myTickets', myTicketsRouter);
app.use('api/settings', settingsRouter)

const main = async () => {
    await mongoose.connect(MONGO_URI)
    app.listen(PORT)
}
main().then(() => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Connected to MongoDB `);

}
).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
})