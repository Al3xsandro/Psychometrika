import { AppError } from "../../../../shared/errors/AppError";

import { IChapter } from "../../dtos/IChapter.dto";
import { Chapter } from "../../schema/Chapter.schema";

class CreateChapterCase { 
    async execute({ 
        title,
        banner,
        content,
        hide
     }: IChapter) {
        if( 
            !title || !banner || !content
        ){
            throw new AppError('Bad Request');
        };
        
        const chapterAlreadyExists = await Chapter.findOne({ title });

        if(chapterAlreadyExists){
            throw new AppError('This chapter already exists');
        };

        const createChapter = await Chapter.create({ 
            title,
            banner,
            content,
            hide
        });

        if(!createChapter){
            throw new AppError('An error has occurred', 500);
        };

        return createChapter;
    };
};

export { CreateChapterCase };