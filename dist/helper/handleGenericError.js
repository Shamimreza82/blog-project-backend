"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGenericError = void 0;
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../config");
const handleGenericError = (err, res) => {
    res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.message,
        statusCode: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        error: err,
        stack: config_1.envFile.NODE_ENV === 'development' ? err.stack : null,
    });
};
exports.handleGenericError = handleGenericError;
