"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidation = void 0;
const zod_1 = require("zod");
const createBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: 'Title is required',
        })
            .min(1, 'Title cannot be empty'),
        content: zod_1.z
            .string({
            required_error: 'Content is required',
        })
            .min(1, 'Content cannot be empty'),
        author: zod_1.z
            .string({
            required_error: 'Author is required',
        })
            .regex(/^[a-fA-F0-9]{24}$/, 'Author must be a valid ObjectId'),
    }),
});
const updateBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: 'Title is required',
        })
            .min(1, 'Title cannot be empty').optional(),
        content: zod_1.z
            .string({
            required_error: 'Content is required',
        })
            .min(1, 'Content cannot be empty').optional(),
        author: zod_1.z
            .string({
            required_error: 'Author is required',
        })
            .regex(/^[a-fA-F0-9]{24}$/, 'Author must be a valid ObjectId').optional(),
    }),
});
exports.BlogValidation = {
    createBlogValidationSchema,
    updateBlogValidationSchema
};
