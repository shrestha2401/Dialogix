import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async (): Promise<void> => {
  const mongoURI: string | undefined = process.env.MONGO_URI;
  if (!mongoURI) {
    console.error('MongoURI is not defined in the environment variables');
    process.exit(1);
  }
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
export default connectDB;
