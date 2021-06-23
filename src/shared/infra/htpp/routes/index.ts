import { Router } from 'express';

import { UserRouter } from './user.routes';

const router = Router();

router.use('/accounts', UserRouter);

export { router };
