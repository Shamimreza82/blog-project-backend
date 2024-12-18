import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const routerErrorHandler = (req: Request, res: Response) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "API route not found",
        statusCode: StatusCodes.NOT_FOUND,
      });
}

export default routerErrorHandler