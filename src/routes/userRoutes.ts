import express, { Router } from 'express';
import userController from '../controllers/userController';
import authMiddleware from '../middlewares/authMiddleware';

const userRouter: Router = express.Router();

userRouter.get('/me', authMiddleware, userController.getCurrentUser);
userRouter.get('/users', authMiddleware, userController.getAllUsers);

export default userRouter;
