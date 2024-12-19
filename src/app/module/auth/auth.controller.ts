import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import { AuthServices } from './auth.service';

const register = catchAsync(async (req, res) => {
  const result = await AuthServices.register(req.body);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'User Register Successfully',
    statusCode: StatusCodes.CREATED,
    data: result || {},
  });
});

const login = catchAsync(async (req, res) => {
  const result = await AuthServices.login(req.body);


  res.status(StatusCodes.OK).json({
    success: true,
    message: 'User Login Successfully',
    statusCode: StatusCodes.OK,
    data: result || {},
  });
});



//TODO Admin Controller 

const blockUser = catchAsync(async (req, res) => {
  const {userId} = req.params
  console.log(userId);
   await AuthServices.userBlockIntoDB(userId);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'User Blocked Successfully',
    statusCode: StatusCodes.OK,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const {userId} = req.params
  console.log(userId);
   await AuthServices.deleteBlogIntoDB(userId);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Blog deleted successfully',
    statusCode: StatusCodes.OK,
  });
});



export const AuthController = {
  register,
  login, 
  blockUser, 
  deleteBlog
};
