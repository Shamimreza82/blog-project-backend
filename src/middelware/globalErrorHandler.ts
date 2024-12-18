
import { StatusCodes } from 'http-status-codes';
import { envFile } from '../config';
import { ErrorRequestHandler } from 'express';
import { ZodAny, ZodError } from 'zod';


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let message = err.message || 'something wants wrong'
  let statusCode = 500



  if(err instanceof Error) {
    message = err.message
    statusCode = StatusCodes.BAD_REQUEST
  } else if (err instanceof ZodError){
    message = "Validation Error"
  }

  

  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: message,
    statusCode: statusCode || StatusCodes.BAD_REQUEST,
    error: err.issues || err,
    stack: envFile.NODE_ENV === 'development' ? err.stack : null,
  });
};


export default globalErrorHandler
