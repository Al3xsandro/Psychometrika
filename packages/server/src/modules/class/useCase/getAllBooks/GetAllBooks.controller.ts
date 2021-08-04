import { Request, Response } from 'express';
import { GetAllBooksCase } from './GetAllBooksCase';

class GetAllBooksController {
    async handle(req: Request, res: Response) {
        const getAllBooksCase = new GetAllBooksCase();

        const books = await getAllBooksCase.execute();

        return res.json(books)
    };
};

export { GetAllBooksController };