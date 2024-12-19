"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../../middelware/validateRequest"));
const user_validation_1 = require("../user/user.validation");
const auth_1 = __importDefault(require("../../../middelware/auth"));
const router = express_1.default.Router();
//TODO user login and register route
router.post('/register', (0, validateRequest_1.default)(user_validation_1.UserValidation.userValidationSchema), auth_controller_1.AuthController.register);
router.post('/login', (0, validateRequest_1.default)(user_validation_1.UserValidation.loginValidationSchema), auth_controller_1.AuthController.login);
//TODO: only admin control routes
router.patch('/users/:userId/block', (0, auth_1.default)('admin'), auth_controller_1.AuthController.blockUser);
router.post('/blogs/:id', (0, auth_1.default)('admin'), auth_controller_1.AuthController.blockUser);
exports.AuthRouter = router;
