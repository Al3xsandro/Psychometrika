import { AppError } from "../../../../shared/errors/AppError";

import { Book } from "../../schema/Book.schema";

class GetBookCase {
    async execute(id: string) {
        if(!id){
            throw new AppError('Invalid id')
        }

        const book = await Book.findOne({ class: id }).populate('chapters').exec();
    
        if(!book){
            throw new AppError('Invalid id', 400);
        };

        return book;
    };
};

export { GetBookCase };