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
const router = express_1.default.Router();
router.post('/register', (0, validateRequest_1.default)(user_validation_1.UserValidation.userValidationSchema), auth_controller_1.AuthController.register);
exports.AuthRouter = router;
