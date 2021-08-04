import { 
    Router,
    Request,
    Response
} from "express";

const index = Router();

import { ensureAdmin } from "../../../../modules/users/middlewares/ensureAdmin";
import auth from "../../../../modules/users/middlewares/auth";

import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUser.controller";
import { AuthenticateUserController } from "../../../../modules/users/useCases/authenticateUser/AuthenticateUser.controller";

import { CreateClassController } from "../../../../modules/class/useCase/createClass/CreateClass.controller";
import { CreateBookController } from "../../../../modules/class/useCase/createBook/CreateBook.controller";
import { CreateChapterController } from "../../../../modules/class/useCase/createChapter/CreateChapter.controller";

import { GetAllBooksController } from "../../../../modules/class/useCase/getAllBooks/GetAllBooks.controller";
import { GetBookController } from "../../../../modules/class/useCase/getBook/GetBook.controller";

const createClassController = new CreateClassController();
const createBookController = new CreateBookController();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createChapterController = new CreateChapterController();

const getAllBooksController = new GetAllBooksController();
const getBookController = new GetBookController();

index.post('/users', createUserController.handle);
index.post('/login', authenticateUserController.handle);

index.post('/class', auth, ensureAdmin, createClassController.handle);
index.post('/book', auth, ensureAdmin, createBookController.handle);
index.post('/chapter', ensureAdmin, auth, createChapterController.handle);

index.get('/books', auth, getAllBooksController.handle);
index.get('/book/:id', auth, getBookController.handle);

index.get('/', (req: Request, res: Response) => {
    res.json({
        name: 'Psychometrika API',
        version: '1.0'
    });
});

export { index };