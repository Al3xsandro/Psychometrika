import { Request, Response } from 'express';
import { GetBookCase } from './GetBookCase';

class GetBookController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const getAllBooksCase = new GetBookCase();

        const books = await getAllBooksCase.execute(id);

        return res.json(books)
    };
};

export { GetBookController };