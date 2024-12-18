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
exports.AuthServices = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../user/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../../../config");
const register = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload;
    const isUserExist = yield user_model_1.User.findOne({ email });
    if (isUserExist) {
        throw new Error('User is already Exist try anther email!');
    }
    const result = yield user_model_1.User.create(payload);
    return result;
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isUserExist = yield user_model_1.User.findOne({ email }).select('+password');
    if (!isUserExist) {
        throw new Error('Can not found user');
    }
    const matchPassword = yield bcrypt_1.default.compare(password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password);
    if (!matchPassword) {
        throw new Error('Please provide Valid password');
    }
    const JwtPayload = Object.assign(Object.assign({}, payload), { role: isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.role });
    const token = yield jsonwebtoken_1.default.sign(JwtPayload, config_1.envFile.jwt_access_secret, { expiresIn: '30d' });
    return {
        token,
    };
});
exports.AuthServices = {
    register,
    login,
};
