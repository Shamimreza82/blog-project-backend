/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { envFile } from '../config';

export const handlerZodError = (err: any, res: Response) => {
    console.log(err);
  const issues = err.issues.map((item: any) => {
    return {
      path: item.path.join('>'),
      message: item.message,
    };
  });

  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: "Validation Error",
    statusCode: StatusCodes.BAD_REQUEST,
    error: issues || err,
    stack: envFile.NODE_ENV === 'development' ? err.stack : null,
  });
};
