import { Router } from 'express';

import { AuthenticateUSerController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { ListUsersController } from '@modules/accounts/useCases/listUsers/ListUserController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userRouter = Router();

const createUserController = new CreateUserController();
const authenticateUSerController = new AuthenticateUSerController();

const listUsersController = new ListUsersController();
userRouter.post('/users', createUserController.handle);
userRouter.post('/login', authenticateUSerController.handle);
userRouter.get(
  'users',
  ensureAuthenticated,
  ensureAdmin,
  listUsersController.handle
);
export { userRouter };
