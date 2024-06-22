import { Application } from 'express';
const express = require('express');
import dotenv from 'dotenv';
import connectDB from './config/db'; // Import the database connection function
import authRouter from './routes/authRoutes';
dotenv.config();
const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;
app.use(express.json());
app.use('/auth', authRouter);
// Connect to the database and then start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to start server:', err);
});
