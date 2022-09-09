import { Router } from 'express';
import UserController from '../useCases/create-user/create-user.controller';
const userRouter = Router();
const userController = new UserController();

userRouter.post('/users', userController.handle);

export default userRouter;