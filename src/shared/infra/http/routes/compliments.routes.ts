import { Router } from 'express';

import { CreateComplimentController } from '@modules/accounts/useCases/createCompliments/CreateComplimentsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';

const complimentRouter = Router();

const createComplimentController = new CreateComplimentController();

complimentRouter.post(
  '/compliments',
  ensureAdmin,
  createComplimentController.handle
);

export { complimentRouter };
