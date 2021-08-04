import { Request, Response } from 'express';

import { IBook } from '../../dtos/IBook.dto';
import { CreateBookCase } from './CreateBookCase';

class CreateBookController {
    async handle(req: Request, res: Response) {
        const { 
            title,
            class_id
        }:IBook = req.body;
        
        const createBookCase = new CreateBookCase();

        const createBook = await createBookCase.execute({ title, class_id });

        return res.json(createBook)
    }
};

export { CreateBookController };