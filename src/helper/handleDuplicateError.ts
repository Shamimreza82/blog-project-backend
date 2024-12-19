/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { envFile } from '../config';

export const handlerDuplicateError = (err: any, res: Response) => {

  res.status(StatusCodes.CONFLICT).json({
    success: false,
    message: err.message,
    statusCode: StatusCodes.CONFLICT,
    error: err,
    stack: envFile.NODE_ENV === 'development' ? err.stack : null,
  });
};
