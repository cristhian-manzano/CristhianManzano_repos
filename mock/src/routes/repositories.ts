import express, { Router } from 'express';
import { getRepositoriesVerificationCode } from '../controllers/repositories/repositories.controller';
import { REPOSITORIES_VALIDATION } from '../controllers/repositories/repositories.validations';

const router: Router = express.Router();

router.get(
  '/verification',
  REPOSITORIES_VALIDATION,
  getRepositoriesVerificationCode,
);

export default router;
