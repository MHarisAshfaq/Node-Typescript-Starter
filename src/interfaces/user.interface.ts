import { Model } from 'mongoose';

interface UserDocument {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

interface UserModel extends Model<UserDocument> {
  isEmailTaken(email: string, excludeUserId?: string): boolean;
  toJSON(schema: any): void;
  paginate(filter: any, options: any): any;
}

export { UserModel, UserDocument };
