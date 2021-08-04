import { 
    Router,
    Request,
    Response
} from "express";

const index = Router();

import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUser.controller";
import { AuthenticateUserController } from "../../../../modules/users/useCases/authenticateUser/AuthenticateUser.controller";

import { CreateClassController } from "../../../../modules/class/useCase/createClass/CreateClass.controller";

const createClassController = new CreateClassController();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

index.post('/users', createUserController.handle);
index.post('/login', authenticateUserController.handle);

index.post('/class', createClassController.handle);

index.get('/', (req: Request, res: Response) => {
    res.json({
        name: 'Psychometrika API',
        version: '1.0'
    });
});

export { index };