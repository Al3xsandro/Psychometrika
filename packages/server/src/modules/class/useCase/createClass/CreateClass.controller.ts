import { Request, Response } from 'express';

import { IClass } from '../../dtos/IClass.dto';

import { CreateClassCase } from '../createClass/CreateClassCase';

class CreateClassController {
    async handle(req: Request, res: Response) {
        const { 
            title
        }: IClass = req.body;

        const createClassCase = new CreateClassCase();

        const classCreated = await createClassCase.execute({
            title
        });

        return res.json(classCreated);
    };
};

export { CreateClassController };