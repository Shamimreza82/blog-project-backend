"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerZodError = void 0;
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../config");
const handlerZodError = (err, res) => {
    console.log(err);
    const issues = err.issues.map((item) => {
        return {
            path: item.path.join('>'),
            message: item.message,
        };
    });
    res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Validation Error",
        statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
        error: issues || err,
        stack: config_1.envFile.NODE_ENV === 'development' ? err.stack : null,
    });
};
exports.handlerZodError = handlerZodError;
