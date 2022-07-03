import express, { Router } from 'express';

import { getRepositoriesVerificationCode } from '../controllers/repositories/repositories.controller';

const router: Router = express.Router();

router.get('/verification', getRepositoriesVerificationCode);

export default router;
