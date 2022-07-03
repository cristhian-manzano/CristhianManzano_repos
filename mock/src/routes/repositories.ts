import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/verification', (_req, res) => {
  return res.send('Verification route');
});

export default router;
