import { Router } from 'express';

import { AuthenticateUSerController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';

const userRouter = Router();

const createUserController = new CreateUserController();
const authenticateUSerController = new AuthenticateUSerController();

userRouter.post('/users', createUserController.handle);
userRouter.post('/login', authenticateUSerController.handle);
export { userRouter };
