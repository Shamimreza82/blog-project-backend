import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../../middelware/validateRequest';
import { UserValidation } from '../user/user.validation';
import auth from '../../../middelware/auth';

const router = express.Router();

//TODO user login and register route
router.post(
  '/register',
  validateRequest(UserValidation.userValidationSchema),
  AuthController.register,
);
router.post(
  '/login',
  validateRequest(UserValidation.loginValidationSchema),
  AuthController.login,
);




//TODO: only admin control routes

router.patch(
  '/users/:userId/block', auth('admin'),
  AuthController.blockUser,
);

router.post(
  '/blogs/:id', auth('admin'),
  AuthController.blockUser,
);

export const AuthRouter = router;
