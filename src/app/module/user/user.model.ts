import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
        validator: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            return emailRegex.test(value);
        },
        message: (props) => `${props.value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: true,
  }, 
  role: {
    type: String, 
    enum: ["admin", "user"], 
    required: true
  },
  isBlocked:  {
    type: Boolean, 
    required: true, 
    default: false
  },
}, {timestamps: true});


export const User = model<TUser>("User", userSchema)