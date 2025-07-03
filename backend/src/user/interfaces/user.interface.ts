import { Document, Types } from 'mongoose';
import { User } from '../schemas/user.schemas';

export interface UserDocument extends User, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
