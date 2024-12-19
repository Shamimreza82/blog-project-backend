/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { envFile } from '../config';

export const handleGenericError = (err: any, res: Response) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    error: err,
    stack: envFile.NODE_ENV === 'development' ? err.stack : null,
  });
};
