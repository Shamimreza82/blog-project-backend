import jwt from 'jsonwebtoken';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import bcrypt from 'bcrypt';
import { envFile } from '../../../config';
import { Blog } from '../blog/blog.model';

const register = async (payload: TUser) => {
  const { email } = payload;
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new Error('User is already Exist try anther email!');
  }
  const result = await User.create(payload);
  return {
    _id: result._id,
    name: result.name, 
    email: result.email
  };
};

const login = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;
  const isUserExist = await User.findOne({ email }).select('+password');
  if (!isUserExist) {
    throw new Error('Can not found user');
  }

  const matchPassword = await bcrypt.compare(password, isUserExist?.password);
  if (!matchPassword) {
    throw new Error('Please provide Valid password');
  }

  const JwtPayload = {
    ...payload,
    role: isUserExist?.role,
  };

  const token = await jwt.sign(
    JwtPayload,
    envFile.jwt_access_secret as string,
    { expiresIn: '30d' },
  );

  return {
    token,
  };
};



//TODO admin control Services 

const userBlockIntoDB = async (userId: string) => {
  const result = await User.findOneAndUpdate(
    { _id: userId },
    { isBlocked: true },
  );
  return result;
};

const deleteBlogIntoDB = async (_id: string) => {
  console.log(_id);
  const result = await Blog.findByIdAndDelete({_id});
  return result;
};

export const AuthServices = {
  register,
  login,
  userBlockIntoDB,
  deleteBlogIntoDB
};
