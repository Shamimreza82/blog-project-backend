"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../../middelware/auth"));
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)('admin'), user_controller_1.UserController.getAllUser);
exports.userRouter = router;
