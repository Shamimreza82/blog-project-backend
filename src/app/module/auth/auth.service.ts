import jwt from 'jsonwebtoken';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import bcrypt from 'bcrypt';
import { envFile } from '../../../config';

const register = async (payload: TUser) => {
  const { email } = payload;
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new Error('User is already Exist try anther email!');
  }
  const result = await User.create(payload);
  return result;
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

export const AuthServices = {
  register,
  login,
};
