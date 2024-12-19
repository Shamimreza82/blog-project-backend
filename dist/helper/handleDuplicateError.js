"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerDuplicateError = void 0;
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../config");
const handlerDuplicateError = (err, res) => {
    res.status(http_status_codes_1.StatusCodes.CONFLICT).json({
        success: false,
        message: err.message,
        statusCode: http_status_codes_1.StatusCodes.CONFLICT,
        error: err,
        stack: config_1.envFile.NODE_ENV === 'development' ? err.stack : null,
    });
};
exports.handlerDuplicateError = handlerDuplicateError;
