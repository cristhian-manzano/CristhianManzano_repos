import morgan from 'morgan';
import Logger from './logger';

const stream = { write: (message: string) => Logger.http(message) };

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

const morganMiddleware = morgan('tiny', {
  stream,
  skip,
});

export default morganMiddleware;
