import { Schema, model } from 'mongoose';
import { IUser } from '@src/models/User';

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  firstname: { type: String, required: true },
  email: { type: String, required: true },
  lastname: { type: String, required: true },
  bill_address: { type: String, required: true },
  delivery_address: { type: String, required: true },
  pwdHash: { type: String, required: true },
  role: { type: String, required: true },
  phone: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
});

const UserSchema = model<IUser>('User', userSchema);

export { UserSchema };