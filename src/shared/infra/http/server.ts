import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { createServer } from 'http';

import '@shared/container';
import '@shared/infra/database';

import AppError from '@shared/errors/AppError';

import routes from './routes';

const app = express();
const server = createServer();

app.use(express.json());
app.use(routes);

app.use((error: Error, __: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response
      .status(error.statusCode)
      .json({ status: 'error', message: error.message })
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' })
})

server.listen(process.env.PORT || 3333, () => {
  console.log('Safe Page API Started!');
});

export { server };
