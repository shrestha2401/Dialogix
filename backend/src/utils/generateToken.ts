import jwt, { Secret } from "jsonwebtoken";
import { Response } from "express";

const generateTokenAndSetCookie = (userId: string, res: Response): void => {
	try {
		const token = jwt.sign({ userId }, process.env.JWT_SECRET as Secret, {
			expiresIn: "15d",
		});

		res.cookie("jwt", token, {
			maxAge: 15 * 24 * 60 * 60 * 1000, 
			httpOnly: true, 
			sameSite: "strict", 
			secure: process.env.NODE_ENV !== "development",
		});
		res.status(200).json({ message: "Token generated and cookie set successfully" });
	} catch (error : any) {
		console.error("Error in generateTokenAndSetCookie:", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default generateTokenAndSetCookie;
