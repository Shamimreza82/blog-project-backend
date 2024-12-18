"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
    }).min(1, "Name cannot be empty"),
    email: zod_1.z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    password: zod_1.z.string({
        required_error: "Password is required",
    }).min(6, "Password must be at least 6 characters long"),
    role: zod_1.z.enum(["admin", "user"], {
        required_error: "Role is required",
    }),
    isBlocked: zod_1.z.boolean().default(false),
});
exports.UserValidation = {
    userValidationSchema
};
