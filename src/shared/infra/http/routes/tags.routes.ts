import { Router } from 'express';

import { CreateTagController } from '@modules/accounts/useCases/createTags/CreateTagController';

import { ensureAdmin } from '../middlewares/ensureAdmin';

const tagRouter = Router();

const createTagController = new CreateTagController();

tagRouter.post('/tags', ensureAdmin, createTagController.handle);

export { tagRouter };
