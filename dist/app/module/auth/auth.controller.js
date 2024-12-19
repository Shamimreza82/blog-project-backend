"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const auth_service_1 = require("./auth.service");
const register = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.register(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        success: true,
        message: 'User Register Successfully',
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        data: result || {},
    });
}));
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.login(req.body);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'User Login Successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result || {},
    });
}));
//TODO Admin Controller 
const blockUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    console.log(userId);
    yield auth_service_1.AuthServices.userBlockIntoDB(userId);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'User Blocked Successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
    });
}));
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    console.log(userId);
    yield auth_service_1.AuthServices.deleteBlogIntoDB(userId);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'Blog deleted successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
    });
}));
exports.AuthController = {
    register,
    login,
    blockUser,
    deleteBlog
};
