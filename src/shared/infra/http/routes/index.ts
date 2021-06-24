import { Router } from 'express';

import { complimentRouter } from './compliments.routes';
import { tagRouter } from './tags.routes';
import { userRouter } from './user.routes';

const router = Router();

router.use('/accounts', userRouter, tagRouter, complimentRouter);

export { router };
