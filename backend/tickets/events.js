import { Router } from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel, ticketsModel, eventModel } from "../db.js";
dotenv.config();
const eventsRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET;

eventsRouter.post("/createEvent", async (req, res) => {
    const { token, name, description, date, time, location, image } = req.body;
    const decoded = jwt.verify(token, JWT_SECRET);
    const userName = decoded.userName;
    if (!userName || !name || !description || !date || !time || !location || !image) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        await eventModel.create({
            name,
            description,
            date,
            time,
            location,
            image
        });
        res.json({
            message: "Event created successfully",
        });
    } catch (error) {
        console.error("Error during event creation:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);
eventsRouter.get("/getEvents", async (req, res) => {
    try {
        const events = await eventModel.find();
        res.json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);
export {
    eventsRouter
}