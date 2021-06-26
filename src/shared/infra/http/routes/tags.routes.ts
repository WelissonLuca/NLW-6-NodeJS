import { Router } from 'express';

import { CreateTagController } from '@modules/accounts/useCases/createTags/CreateTagController';
import { ListTagsController } from '@modules/accounts/useCases/listTags/ListTagController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const tagRouter = Router();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();
tagRouter.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

tagRouter.get(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  listTagsController.handle
);

export { tagRouter };
