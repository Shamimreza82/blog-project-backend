import express from 'express';
import { BlogController } from './blog.controller';
import validateRequest from '../../../middelware/validateRequest';
import { BlogValidation } from './blog.validation';
import auth from '../../../middelware/auth';

const router = express.Router();

router.post(
  '/',
  auth('user'),
  validateRequest(BlogValidation.createBlogValidationSchema),
  BlogController.createBlog,
);
router.get('/', BlogController.getAllBlog);

router.patch(
  '/:id', auth('user'),
  validateRequest(BlogValidation.updateBlogValidationSchema),
  BlogController.updateBlog,
);

router.delete('/:id',auth('user'), BlogController.deleteBlog);

export const BlogRouter = router;
