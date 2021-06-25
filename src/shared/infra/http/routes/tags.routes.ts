import { Router } from 'express';

import { CreateTagController } from '@modules/accounts/useCases/createTags/CreateTagController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const tagRouter = Router();

const createTagController = new CreateTagController();

tagRouter.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

export { tagRouter };
