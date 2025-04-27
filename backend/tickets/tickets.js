import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel, ticketsModel } from "../db.js";
dotenv.config();
const ticketRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET;

const rabndomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

ticketRouter.post("/createTicket", async (req, res) => {
    const { token, type, description, date, image, location, title, cost } = req.body;
    // console.log(req.body);
    console.log(location);
    const decoded = jwt.verify(token, JWT_SECRET);
    const userName = decoded.userName;
    const data = await userModel.findOne({ userName })
    const email = data.email;
    const randomString = rabndomString(10);
    if (!userName || !type || !description || !date ) {
        console.log(userName, type, description, date, image);
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        await ticketsModel.create({
            ticketId: randomString,
            title: title,
            userName,
            cost,
            email,
            type,
            description,
            date,
            image,
            status: "pending",
            location: location
        });
        res.json({
            message: "Ticket created successfully",
        });
    } catch (error) {
        console.error("Error during ticket creation:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);
ticketRouter.post("/sellTickets", async (req, res) => {
    const { token, type, ticketId } = req.body;
    const decoded = jwt.verify(token, JWT_SECRET);
    const purchaserUsername = decoded.userName;
    const data = await userModel.findOne({ userName: purchaserUsername });
    await userModel.updateOne({ userName: purchaserUsername }, {
        $set: {
            bought: data.bought + 1,
        }
    });

    const ticketData = await ticketsModel.findOne({ ticketId });
    const cost = ticketData.cost;
    const sellerUsername = ticketData.userName;
    const sellerData = await userModel.findOne({ userName: sellerUsername });
    const sales = sellerData.sales + cost;
    await userModel.updateOne({ userName: sellerUsername },
        {
            $set: {
                sold: sellerData.sold + 1,
                sales: sales
            }
        }
    )

    if (!purchaserUsername || !type || !ticketId) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const data2 = await ticketsModel.findOne({ ticketId }); // Fixed syntax
    if (!data2) {
        return res.status(400).json({ message: "Ticket not found" });
    }
    try {
        await ticketsModel.updateOne({ ticketId }, {
            $set: {
                purchaser: purchaserUsername,
                status: "sold",
            }
        });
        res.json({
            message: "Ticket sold successfully",
        });
    } catch (error) {
        console.error("Error during ticket selling:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



export {
    ticketRouter
}