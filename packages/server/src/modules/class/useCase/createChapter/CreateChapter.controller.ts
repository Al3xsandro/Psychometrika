import { Request, Response } from 'express';

import { IChapter } from '../../dtos/IChapter.dto';
import { CreateChapterCase } from './CreateChapterCase';

class CreateChapterController {
    async handle(req: Request, res: Response){
        const { 
            title,
            banner,
            book,
            hide,
            content
        }:IChapter = req.body;

        const createChapterCase = new CreateChapterCase();

        const createChapter = await createChapterCase.execute({ 
            title,
            banner,
            book,
            hide,
            content
        });

        return res.json(createChapter);
    };
};

export { CreateChapterController };