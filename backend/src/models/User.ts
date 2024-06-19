import { Document, model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
}

export default model<UserDocument>('User', userSchema);
