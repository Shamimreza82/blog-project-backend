import express from 'express';
import { UserController } from './user.controller';
import auth from '../../../middelware/auth';

const router = express.Router();


router.get('/', auth('admin'), UserController.getAllUser);


export const userRouter = router;
