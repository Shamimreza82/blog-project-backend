import { User } from "./user.model";

const getAllUserIntoDB = async () => {
    const result = await User.find()
    return result;
  };

export const UserServices = {
    getAllUserIntoDB
}