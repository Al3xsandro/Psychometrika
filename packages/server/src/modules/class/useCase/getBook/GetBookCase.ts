import { AppError } from "../../../../shared/errors/AppError";

import { Book } from "../../schema/Book.schema";

class GetBookCase {
    async execute(id: string) {
        if(!id){
            throw new AppError('Invalid id')
        }

        const book = await Book.findById(id).populate('chapters').exec();
    
        if(!book){
            throw new AppError('An error has occurred', 500);
        };

        return book;
    };
};

export { GetBookCase };