import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const register = async (payload: TUser) => {
    const {email, password, role, isBlocked} = payload; 
    const isUserExist = await User.findOne({email});
    if(isUserExist){
        throw new Error('User is already Exist try anther email!')
    }

  const result = await User.create(payload);
  return result;
};

export const AuthServices = {
  register,
};
