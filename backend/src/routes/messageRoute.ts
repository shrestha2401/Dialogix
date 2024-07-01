import express, { Router } from "express";
import { getMessages, sendMessage } from "../controllers/messageController";
import protectRoute from "../middleware/protect";
const router : Router = express.Router();
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
export default router;
