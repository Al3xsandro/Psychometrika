import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import 'express-async-errors';

import { route } from './routes/users.routes';
import { index } from './routes/index.routes';

import { HandleError } from './middlewares/handleError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', route);
app.use(index);

app.use(HandleError);

export { app };