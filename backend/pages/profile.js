import { Router } from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel, ticketsModel, eventModel } from "../db.js";
dotenv.config();
const profileRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET;

profileRouter.get("/", async (req, res) => {
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
        res.json({
            message: "Profile data fetched successfully",
            data: {
                userName: data.userName,
                email: data.email,
                image: data.image,
                bought: data.bought,
                sold: data.sold,
                createdAt: data.createdAt,
            }
        })
    } catch (error) {
        console.error("Error during profile data fetch:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);