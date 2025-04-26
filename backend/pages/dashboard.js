import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel, ticketsModel, eventModel } from "../db.js";
dotenv.config();
const dashRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET;

dashRouter.get("/stats", async (req, res) => {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_SECRET);
    const userName = decoded.userName;
    if (!userName) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const data = await userModel.findOne({ userName });
        if (!data) {
            return res.status(400).json({ message: "User not found" });
        }
        const tickets = await ticketsModel.find({ userName });
        const totalTickets = tickets.length;
        const soldTickets = tickets.filter(ticket => ticket.status === "sold").length;
        const pendingTickets = tickets.filter(ticket => ticket.status === "pending").length;
        const views = 8;
        const sales = 0;
        res.json({
            message: "Dashboard data fetched successfully",
            data: {
                userName: data.userName,
                totalTickets,
                soldTickets,
                pendingTickets,
                views,
                sales
            }
        })
    } catch (error) {
        console.error("Error during dashboard data fetch:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);
dashRouter.get("/events", async (req, res) => {
    try {
        const events = await eventModel.find();
        res.json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);
dashRouter.get("/mytickets", async (req, res) => {
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, JWT_SECRET);
        const userName = decoded.userName;
        const tickets = await ticketsModel.find({userName});
        res.json(tickets);
    } catch (error) {
        console.error("Error fetching tickets:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);
export {
    dashRouter
}