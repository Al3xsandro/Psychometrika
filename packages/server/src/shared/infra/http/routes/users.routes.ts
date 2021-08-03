import { Router } from "express";

const route = Router();

import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUser.controller";
import { AuthenticateUserController } from "../../../../modules/users/useCases/authenticateUser/AuthenticateUser.controller";

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

route.post('/users', createUserController.handle);
route.post('/login', authenticateUserController.handle);

export { route };