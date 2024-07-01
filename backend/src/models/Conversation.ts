import { Schema, model, Document } from 'mongoose';
import { IMessage } from './Message';
import { Types } from 'mongoose';
export interface IConversation extends Document {
  participants: Types.ObjectId[];
  messages: IMessage[];
}

const conversationSchema = new Schema({
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }]
});

const Conversation = model<IConversation>('Conversation', conversationSchema);

export default Conversation;
