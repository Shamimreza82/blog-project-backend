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
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("./app/module/auth/auth.route");
const globalErrorHandler_1 = __importDefault(require("./middelware/globalErrorHandler"));
const routerErrorHandler_1 = __importDefault(require("./middelware/routerErrorHandler"));
const blog_route_1 = require("./app/module/blog/blog.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/auth', auth_route_1.AuthRouter);
app.use('/api/blogs', blog_route_1.BlogRouter);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: "server is running" });
}));
app.use(routerErrorHandler_1.default);
app.use(globalErrorHandler_1.default);
exports.default = app;
