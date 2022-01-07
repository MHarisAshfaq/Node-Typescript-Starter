import { Model } from 'mongoose';

interface UserInterface {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface UserModel extends Model<UserInterface> {
  isEmailTaken(email: string, excludeUserId?: string): boolean;
  toJSON(schema: any): void;
  paginate(filter: any, options: any): any;
}

export { UserModel, UserInterface };
