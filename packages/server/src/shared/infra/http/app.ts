import express from 'express';

import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config()

import '../http/mongoose/connection';

import 'express-async-errors';
import { HandleError } from './middlewares/handleError';

import { route } from './routes/users.routes';

const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', route);
app.use(HandleError);

export { app };