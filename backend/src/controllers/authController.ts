import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password }: { username: string, email: string, password: string } = req.body;
  
  try {
    const existingUser: IUser | null = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'User with this email already exists' });
      return
    }
    const hashedPassword: string = await bcrypt.hash(password, 10);
    const newUser: IUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ message: 'Unknown error occurred' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password }: { email: string, password: string } = req.body;

  try {
    const user: IUser | null = await User.findOne({ email });
    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return
      }
    const isMatch: boolean = await bcrypt.compare(password, user.password);
    if (!isMatch) {
       res.status(400).json({ message: 'Invalid credentials' });
       return
      }
    const token: string = jwt.sign({ userId: user._id }, process.env.SECRET_KEY || 'default_secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Unknown error occurred' });
  }
}

export const logout = (req : Request, res:Response) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error:any) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
;

