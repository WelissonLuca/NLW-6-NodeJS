import { Router } from 'express';

import { tagRouter } from './tags.routes';
import { userRouter } from './user.routes';

const router = Router();

router.use('/accounts', userRouter, tagRouter);

export { router };
