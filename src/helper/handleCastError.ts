import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { envFile } from "../config";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleCastError = (err: any, res: Response) => {

     res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: err.message,
        statusCode: StatusCodes.BAD_REQUEST,
        error: err,
        stack: envFile.NODE_ENV === 'development' ? err.stack : null,
      });
    
}