import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';

const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post('/users', createUserController.handle);

export { userRouter };
