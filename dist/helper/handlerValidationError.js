"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../config");
/* eslint-disable @typescript-eslint/no-explicit-any */
const handleValidationError = (err, res) => {
    const issues = Object.values(err.errors).map((item) => {
        return {
            name: item.name,
            path: item.path,
            message: item.message,
        };
    });
    res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Validation Error',
        statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
        error: issues || err,
        stack: config_1.envFile.NODE_ENV === 'development' ? err.stack : null,
    });
};
exports.handleValidationError = handleValidationError;
