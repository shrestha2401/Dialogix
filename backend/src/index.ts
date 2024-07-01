const express = require('express');
import dotenv from 'dotenv';
import connectDB from './config/db';
import cookieParser from "cookie-parser";
import authRouter from './routes/authRoutes';
import { app, server } from "./socket/socket";
import messageRoute from "./routes/messageRoute"; 
import userRoute from "./routes/userRoute"
dotenv.config();

const PORT: string | number = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
connectDB().then(() => {
  server.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to start server:', err);
});
app.use('/auth', authRouter);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

