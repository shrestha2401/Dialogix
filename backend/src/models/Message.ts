import { Schema, Document, model } from 'mongoose';

export interface IMessage extends Document {
  senderId: Schema.Types.ObjectId;
  receiverId: Schema.Types.ObjectId;
  message: string;
}

const messageSchema: Schema<IMessage> = new Schema<IMessage>(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = model<IMessage>('Message', messageSchema);

export default Message;
