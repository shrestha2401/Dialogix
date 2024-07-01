import jwt, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User, { IUser } from "../models/User";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
interface AuthenticatedRequest extends Request {
    user?: mongoose.Document<any, any, any>; 
  }
const protectRoute = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const token = req.cookies.jwt;

		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		// Check if JWT_SECRET is defined
		if (!process.env.JWT_SECRET) {
			throw new Error("JWT_SECRET is not defined in environment variables");
		}

		const decoded: any = jwt.verify(token, process.env.JWT_SECRET as Secret);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user: IUser | null = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;
		next();
	} catch (error: any) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;
