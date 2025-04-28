import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel } from "../db.js";
dotenv.config();
const authRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET;

authRouter.post("/signup", async (req, res) => {
  const { name,lastname , userName, email, password, number } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(number)
    await userModel.create({
        name,
        lastname,
        userName,
        email,
        password: hashedPassword,
        number
      });
    const token = jwt.sign({ userName }, JWT_SECRET);
    res.json({
      message: "User created successfully",
      token,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
);
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ email: email }, JWT_SECRET);
    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
);

export{
    authRouter
}