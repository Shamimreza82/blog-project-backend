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
exports.BlogController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const blog_service_1 = require("./blog.service");
const createBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogServices.createBlogIntoDB(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        success: true,
        message: 'Blog Create Successfully',
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        data: result || {},
    });
}));
const getAllBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogServices.getAllBlogIntoDB();
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'Blogs fetched successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result || {},
    });
}));
const updateBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.BlogServices.updateBlogIntoDB(id, req.body);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'Blog Update Successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result || {},
    });
}));
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield blog_service_1.BlogServices.deletedBlogIntoDB(id);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'Blog Deleted Successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
    });
}));
exports.BlogController = {
    createBlog,
    updateBlog,
    getAllBlog,
    deleteBlog,
};
