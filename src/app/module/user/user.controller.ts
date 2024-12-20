import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import { UserServices } from './user.service';

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserIntoDB();

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Users fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const UserController = {
  getAllUser,
};
