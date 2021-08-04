import { Router } from "express";

const routes = Router();

import auth from "../../../../modules/users/middlewares/auth";

import { GetAllBooksController } from "../../../../modules/class/useCase/getAllBooks/GetAllBooks.controller";
import { GetBookController } from "../../../../modules/class/useCase/getBook/GetBook.controller";

const getAllBooksController = new GetAllBooksController();
const getBookController = new GetBookController();

routes.get('/books', auth, getAllBooksController.handle);
routes.get('/book/:id', auth, getBookController.handle);

export default routes;