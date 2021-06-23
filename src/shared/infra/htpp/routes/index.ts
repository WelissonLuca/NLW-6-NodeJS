import { Router } from 'express';

import { TagRouter } from './tags.routes';
import { UserRouter } from './user.routes';

const router = Router();

router.use('/accounts', UserRouter, TagRouter);

export { router };
