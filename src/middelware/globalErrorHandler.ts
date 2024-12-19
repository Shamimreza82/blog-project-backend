/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose"
import { handleCastError } from "../helper/handleCastError"
import { handlerDuplicateError } from "../helper/handleDuplicateError"
import { handleGenericError } from "../helper/handleGenericError"
import { handleValidationError } from "../helper/handlerValidationError"
import { handlerZodError } from "../helper/handleZodError"
import { NextFunction, Request, Response } from "express"


export const globalErrorHandler = (err: any, req: Request, res: Response, _next: NextFunction): void => {
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