import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { envFile } from '../config';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleValidationError = (err: any, res: Response) => {
  const issues = Object.values(err.errors).map((item: any) => {
    return {
      name: item.name,
      path: item.path,
      message: item.message,
    };
  });
  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: 'Validation Error',
    statusCode: StatusCodes.BAD_REQUEST,
    error: issues || err,
    stack: envFile.NODE_ENV === 'development' ? err.stack : null,
  });
};
