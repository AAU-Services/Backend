import express, { Router } from 'express';
import authController from '../controllers/authController';

const authRouter: Router = express.Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/signin', authController.signin);

export default authRouter;
