"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const routerErrorHandler = (req, res) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        message: "API route not found",
        statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
    });
};
exports.default = routerErrorHandler;
