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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
const blog_model_1 = require("./blog.model");
const user_model_1 = require("../user/user.model");
const createBlogIntoDB = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    const userFind = yield user_model_1.User.findOne({ email: user === null || user === void 0 ? void 0 : user.email });
    if (!userFind) {
        throw new Error("User not found");
    }
    console.log(userFind);
    payload.author = userFind === null || userFind === void 0 ? void 0 : userFind._id;
    const result = yield blog_model_1.Blog.create(payload);
    return {
        _id: result._id,
        title: result.title,
        content: result.content,
        author: {
            _id: userFind === null || userFind === void 0 ? void 0 : userFind._id,
            name: userFind === null || userFind === void 0 ? void 0 : userFind.name,
            email: userFind === null || userFind === void 0 ? void 0 : userFind.email
        },
    };
});
const getAllBlogIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.find({}, { _id: 1, title: 1, content: 1, author: 1 }).populate('author');
    return result;
});
const updateBlogIntoDB = (authorId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findOneAndUpdate({ author: authorId }, { $set: payload }, { new: true }).populate('author');
    return result;
});
const deletedBlogIntoDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findByIdAndDelete({ _id });
    return result;
});
exports.BlogServices = {
    createBlogIntoDB,
    updateBlogIntoDB,
    deletedBlogIntoDB,
    getAllBlogIntoDB,
};
