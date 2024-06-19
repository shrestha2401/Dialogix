import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { UserDocument } from '../models/User'; // Adjust the import based on your User model definition

function isError(error: any): error is Error {
  return error instanceof Error;
}


export const signup = async (req: Request, res: Response) => {
  const { username, email, password }: { username: string, email: string, password: string } = req.body;

  try {
    // Check if user already exists
    const existingUser: UserDocument | null = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword: string = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser: UserDocument = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Unknown error occurred' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password }: { email: string, password: string } = req.body;

  try {
    // Find user by email
    const user: UserDocument | null = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isMatch: boolean = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token: string = jwt.sign({ userId: user._id }, process.env.SECRET_KEY || 'default_secret', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Unknown error occurred' });
  }
};

