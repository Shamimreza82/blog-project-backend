import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../../middelware/validateRequest';
import { UserValidation } from '../user/user.validation';

const router = express.Router();

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

export const AuthRouter = router;
