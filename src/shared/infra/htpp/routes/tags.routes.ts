import { Router } from 'express';

import { CreateTagController } from '@modules/accounts/useCases/createTags/CreateTagController';

const TagRouter = Router();

const createTagController = new CreateTagController();

TagRouter.post('/tags', createTagController.handle);

export { TagRouter };
