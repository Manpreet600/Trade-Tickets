import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel, ticketsModel, eventModel } from "../db.js";
dotenv.config();
const myTicketsRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET;

myTicketsRouter.get("/", async (req, res) => {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_SECRET);
    const userName = decoded.userName;
    if (!userName) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const tickets = await ticketsModel.find({ userName });
        if (!tickets) {
            return res.status(400).json({ message: "No tickets found" });
        }
        res.json({
            message: "Tickets fetched successfully",
            data: tickets
        })
    } catch (error) {
        console.error("Error during ticket fetch:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);
export {
    myTicketsRouter
}