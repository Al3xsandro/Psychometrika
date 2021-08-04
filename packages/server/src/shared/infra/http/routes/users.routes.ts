import { Router } from "express";

const routes = Router();

import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUser.controller";
import { AuthenticateUserController } from "../../../../modules/users/useCases/authenticateUser/AuthenticateUser.controller";

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

routes.post('/users', createUserController.handle);
routes.post('/login', authenticateUserController.handle);

export default routes;