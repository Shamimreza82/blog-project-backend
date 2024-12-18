import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(1, 'Title cannot be empty'),

    content: z
      .string({
        required_error: 'Content is required',
      })
      .min(1, 'Content cannot be empty'),

    author: z
      .string({
        required_error: 'Author is required',
      })
      .regex(/^[a-fA-F0-9]{24}$/, 'Author must be a valid ObjectId'),
  }),
});


const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .min(1, 'Title cannot be empty').optional(),

    content: z
      .string({
        required_error: 'Content is required',
      })
      .min(1, 'Content cannot be empty').optional(),

    author: z
      .string({
        required_error: 'Author is required',
      })
      .regex(/^[a-fA-F0-9]{24}$/, 'Author must be a valid ObjectId').optional(),

  }),
});



export const BlogValidation = {
    createBlogValidationSchema, 
    updateBlogValidationSchema
}
