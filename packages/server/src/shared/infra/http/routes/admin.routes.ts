import { Router } from "express";

const routes = Router();

import { ensureAdmin } from "../../../../modules/users/middlewares/ensureAdmin";
import auth from "../../../../modules/users/middlewares/auth";

import { CreateClassController } from "../../../../modules/class/useCase/createClass/CreateClass.controller";
import { CreateBookController } from "../../../../modules/class/useCase/createBook/CreateBook.controller";
import { CreateChapterController } from "../../../../modules/class/useCase/createChapter/CreateChapter.controller";

const createClassController = new CreateClassController();
const createBookController = new CreateBookController();
const createChapterController = new CreateChapterController();

routes.post('/class', auth, ensureAdmin, createClassController.handle);
routes.post('/book', auth, ensureAdmin, createBookController.handle);
routes.post('/chapter', ensureAdmin, auth, createChapterController.handle);

export default routes;