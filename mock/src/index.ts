import * as dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log('Error: ', err);
  return res.status(500).send('Internal server error!');
});

const PORT = process.env.APP_PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
