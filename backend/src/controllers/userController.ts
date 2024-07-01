import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import mongoose from 'mongoose';
interface AuthenticatedRequest extends Request {
    user?: mongoose.Document<any, any, any>; 
  }
export const getUsersForSidebar = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const loggedInUserId = (req.user as IUser)._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');
    res.status(200).json(filteredUsers);
  } catch (error: any) {
    console.error('Error in getUsersForSidebar: ', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
