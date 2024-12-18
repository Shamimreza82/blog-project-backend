import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import { AuthServices } from './auth.service';

const register = catchAsync(async (req, res) => {
  const result = await AuthServices.register(req.body);

  res.json({
    success: true,
    message: 'User Register Successfully',
    statusCode: StatusCodes.CREATED,
    data: result || {},
  });
});

export const AuthController = {
  register,
};
