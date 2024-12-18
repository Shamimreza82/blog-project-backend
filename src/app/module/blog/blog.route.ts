import express from 'express';
import { BlogController } from './blog.controller';
import validateRequest from '../../../middelware/validateRequest';
import { BlogValidation } from './blog.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(BlogValidation.createBlogValidationSchema),
  BlogController.createBlog,
);

router.patch(
  '/:id',
  validateRequest(BlogValidation.updateBlogValidationSchema),
  BlogController.updateBlog,
);

export const BlogRouter = router;
