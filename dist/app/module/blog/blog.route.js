"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRouter = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const validateRequest_1 = __importDefault(require("../../../middelware/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const auth_1 = __importDefault(require("../../../middelware/auth"));
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)('user'), (0, validateRequest_1.default)(blog_validation_1.BlogValidation.createBlogValidationSchema), blog_controller_1.BlogController.createBlog);
router.get('/', blog_controller_1.BlogController.getAllBlog);
router.patch('/:id', (0, auth_1.default)('user'), (0, validateRequest_1.default)(blog_validation_1.BlogValidation.updateBlogValidationSchema), blog_controller_1.BlogController.updateBlog);
router.delete('/:id', (0, auth_1.default)('user'), blog_controller_1.BlogController.deleteBlog);
exports.BlogRouter = router;
