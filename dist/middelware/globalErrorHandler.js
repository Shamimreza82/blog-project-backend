"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = __importDefault(require("mongoose"));
const handleCastError_1 = require("../helper/handleCastError");
const handleDuplicateError_1 = require("../helper/handleDuplicateError");
const handleGenericError_1 = require("../helper/handleGenericError");
const handlerValidationError_1 = require("../helper/handlerValidationError");
const handleZodError_1 = require("../helper/handleZodError");
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorHandler = (err, req, res, _next) => {
    if (err.name && err.name === "ZodError") {
        (0, handleZodError_1.handlerZodError)(err, res);
    }
    else if (err instanceof mongoose_1.default.Error.CastError) {
        (0, handleCastError_1.handleCastError)(err, res);
    }
    else if (err instanceof mongoose_1.default.Error.ValidationError) {
        (0, handlerValidationError_1.handleValidationError)(err, res);
    }
    else if (err.code && err.code === 11000) {
        (0, handleDuplicateError_1.handlerDuplicateError)(err, res);
    }
    else if (err instanceof Error) {
        (0, handleGenericError_1.handleGenericError)(err, res);
    }
};
exports.globalErrorHandler = globalErrorHandler;
exports.default = exports.globalErrorHandler;
