import { Router } from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel, ticketsModel } from "../db.js";
dotenv.config();
const settingsRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET;

settingsRouter.get("/mydetails", async (req, res) => {
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
                name:data.name,
                lastname:data.lastname,
                userName: data.userName,
                email: data.email,
                image: data.image,
                bought: data.bought,
                sold: data.sold,
                createdAt: data.createdAt,
                city: data.city,
            }
        })
    } catch (error) {
        console.error("Error during profile data fetch:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);

settingsRouter.get('/paymentmethods', async (req, res) => {
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
            message: "Payment methods fetched successfully",
            cardNumber: data.cardNumber,
            expiryDate: data.expiryDate,
            cvv: data.cvv,
            paypal: data.paypal,
            bankNumber: data.bankNumber,
            ifsc: data.ifsc,
        })
    } catch (error) {
        console.error("Error during payment methods fetch:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);

export{
    settingsRouter
}