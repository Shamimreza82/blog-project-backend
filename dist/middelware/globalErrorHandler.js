"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../config");
const zod_1 = require("zod");
const globalErrorHandler = (err, req, res, next) => {
    let message = err.message || 'something wants wrong';
    let statusCode = 500;
    if (err instanceof Error) {
        message = err.message;
        statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    else if (err instanceof zod_1.ZodError) {
        message = "Validation Error";
    }
    res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        success: false,
        message: message,
        statusCode: statusCode || http_status_codes_1.StatusCodes.BAD_REQUEST,
        error: err.issues || err,
        stack: config_1.envFile.NODE_ENV === 'development' ? err.stack : null,
    });
};
exports.default = globalErrorHandler;
