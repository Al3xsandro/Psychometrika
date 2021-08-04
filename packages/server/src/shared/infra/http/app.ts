import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import 'express-async-errors';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './../../../docs/swagger.json';

import index from './routes/index.routes';
import usersRoute from './routes/users.routes';
import adminRoute from './routes/admin.routes';
import booksRoute from './routes/books.routes';

import { HandleError } from './middlewares/handleError';

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', index);
app.use('/v1', usersRoute);
app.use('/v1', adminRoute);
app.use('/v1', booksRoute);

app.use(HandleError);

export { app };