import { Request, Response } from 'express';
import { AuthenticateUserCase } from './AutenticateUserCase';

class AuthenticateUserController {
    async handle(req: Request, res: Response){
        const { email, password } = req.body;
        
        const authenticateUserService = new AuthenticateUserCase();

        const token = await authenticateUserService.execute({
            email,
            password
        });

        return res.json(token);
    };
};

export { AuthenticateUserController };