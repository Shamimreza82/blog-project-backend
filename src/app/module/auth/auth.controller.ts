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

export const AuthController = {
  register,
  login
};
