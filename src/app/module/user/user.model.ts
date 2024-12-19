import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt'
import { envFile } from '../../../config';

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
    select: false
  }, 
  role: {
    type: String, 
    enum: ["admin", "user"], 
    required: true,
    default: "user"
  },
  isBlocked:  {
    type: Boolean, 
    required: true, 
    default: false
  },
}, {timestamps: true});


userSchema.pre('save', async function () {
  const password = await bcrypt.hash(this.password, Number(envFile.salt_round_pass as string))
  this.password = password
})

userSchema.post('save', async function (docs, next) {


  next()
})


export const User = model<TUser>("User", userSchema)