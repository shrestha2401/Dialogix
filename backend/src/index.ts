import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/authRoutes'; 
dotenv.config();
const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;
const mongoURI: string | undefined = process.env.MONGO_URI;
if (!mongoURI) {
  console.error('MongoURI is not defined in the environment variables');
  process.exit(1);
}
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript Backend!');
});

