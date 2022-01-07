import { ObjectId } from 'mongoose';

interface TokenInterface {
  token: string;
  user: ObjectId;
  type: string;
  expires: Date;
  blacklisted: boolean;
}

export { TokenInterface };
