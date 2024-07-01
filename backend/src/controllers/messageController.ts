import Conversation from "../models/Conversation";
import { IConversation } from "../models/Conversation";
import mongoose from "mongoose";
import Message, { IMessage } from "../models/Message";
import { getReceiverSocketId , io } from "../socket/socket";
import { Request, Response } from 'express';
interface AuthenticatedRequest extends Request {
    user?: mongoose.Document<any, any, any>; 
  }
export const sendMessage =async (req:AuthenticatedRequest, res: Response): Promise<void> =>{
    try{
       const {message} = req.body
       const { id: receiverId } = req.params;
	   const senderId = (req.user as any)._id;

       let conversation :  IConversation | null = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });
  
      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }
      const newMessage: IMessage = new Message({
        senderId,
        receiverId,
        message,
      });
      if (newMessage) {
        conversation.messages.push(newMessage._id as any);
      }
      await Promise.all([conversation.save(), newMessage.save()]);
      const receiverSocketId = getReceiverSocketId(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit('newMessage', newMessage);
      }
  
      res.status(201).json(newMessage);
    }
    catch (error:any) {
        console.log('Error in sendMessage controller: ', error.message);
        res.status(500).json({ error: 'Internal server error' });
      }
} 
export const getMessages = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const { id: userToChatId } = req.params;
      const senderId = (req.user as any)._id as mongoose.Types.ObjectId; // Assuming req.user has _id property
  
      const conversation: IConversation | null = await Conversation.findOne({
        participants: { $all: [senderId, userToChatId] },
      }).populate('messages');
  
      if (!conversation) {
        res.status(200).json([]);
        return
      }
  
      const messages: IMessage[] = conversation.messages;
  
      res.status(200).json(messages);
    } catch (error : any) {
      console.log('Error in getMessages controller: ', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };