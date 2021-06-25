import { Router } from 'express';

import { CreateComplimentController } from '@modules/accounts/useCases/createCompliments/CreateComplimentsController';
import { ListUserReceiveComplimentsController } from '@modules/accounts/useCases/listUserReceiveCompliments/ListUserReceiveComplimentsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const complimentRouter = Router();

const createComplimentController = new CreateComplimentController();

const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
complimentRouter.post(
  '/compliments',
  ensureAuthenticated,
  ensureAdmin,
  createComplimentController.handle
);

complimentRouter.get(
  '/compliments',
  ensureAuthenticated,
  ensureAdmin,
  listUserReceiveComplimentsController.handle
);

export { complimentRouter };
