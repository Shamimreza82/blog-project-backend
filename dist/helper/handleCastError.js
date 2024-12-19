"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCastError = void 0;
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../config");
/* eslint-disable @typescript-eslint/no-explicit-any */
const handleCastError = (err, res) => {
    res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        success: false,
        message: err.message,
        statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
        error: err,
        stack: config_1.envFile.NODE_ENV === 'development' ? err.stack : null,
    });
};
exports.handleCastError = handleCastError;
