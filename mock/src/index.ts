import * as dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import Logger from './configs/logger';
import morganMiddleware from './configs/morgan';
import Routes from './routes';
import { errorResponse } from './utils/responses';

dotenv.config();
const app = express();

app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', Routes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  Logger.error(err);
  return res
    .status(500)
    .json(errorResponse(res.statusCode, 'Internal server error!'));
});

const PORT = process.env.APP_PORT ?? 3000;

app.listen(PORT, () => {
  Logger.debug(`Server running in port ${PORT}`);
});
