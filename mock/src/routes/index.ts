import express, { Router } from 'express';
import Repositories from './repositories';

const router: Router = express.Router();

router.use('/repositories', Repositories);

export default router;
