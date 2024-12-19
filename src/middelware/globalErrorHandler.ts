/* eslint-disable @typescript-eslint/no-explicit-any */

// import { StatusCodes } from 'http-status-codes';
// import { envFile } from '../config';
// import { ErrorRequestHandler } from 'express';
// import { ZodAny, ZodError } from 'zod';

import mongoose from "mongoose"
import { handleCastError } from "../helper/handleCastError"
import { handlerDuplicateError } from "../helper/handleDuplicateError"
import { handleGenericError } from "../helper/handleGenericError"
import { handleValidationError } from "../helper/handlerValidationError"
import { handlerZodError } from "../helper/handleZodError"


// const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   let message = err.message || 'something wants wrong'
//   let statusCode = 500



//   if(err instanceof Error) {
//     message = err.message
//     statusCode = StatusCodes.BAD_REQUEST
//   } else if (err instanceof ZodError){
//     message = "Validation Error"
//   }

  

//   res.status(StatusCodes.BAD_REQUEST).json({
//     success: false,
//     message: message,
//     statusCode: statusCode || StatusCodes.BAD_REQUEST,
//     error: err.issues || err,
//     stack: envFile.NODE_ENV === 'development' ? err.stack : null,
//   });
// };


// export default globalErrorHandler


export const globalErrorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
  if (err.name && err.name === "ZodError") {
      handlerZodError(err, res)
  }
  else if (err instanceof mongoose.Error.CastError) {
      handleCastError(err, res)
  }
  else if (err instanceof mongoose.Error.ValidationError) {
      handleValidationError(err, res)
  }
  else if (err.code && err.code === 11000) {
      handlerDuplicateError(err, res)
  }
  else if (err instanceof Error) {
      handleGenericError(err, res)
  }
}


export default globalErrorHandler