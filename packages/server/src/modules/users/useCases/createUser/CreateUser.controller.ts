import { Request, Response } from 'express';

import IUser from '../../dtos/IUser.dto';
import { CreateUserCase } from './CreateUserCase';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { 
            email,
            password,
            select_class
        }: IUser = req.body;

        const createUserService = new CreateUserCase();

        const user = await createUserService.execute({
            email,
            password,
            select_class
        });
        
        return res.json(user);
    };
};

export { CreateUserController };