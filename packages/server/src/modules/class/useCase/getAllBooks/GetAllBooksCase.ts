import { AppError } from "../../../../shared/errors/AppError";

import { Book } from "../../schema/Book.schema";

class GetAllBooksCase {
    async execute() {
        const books = await Book.find().populate('chapters').exec();
    
        if(!books){
            throw new AppError('An error has occurred', 500);
        };

        return books;
    };
};

export { GetAllBooksCase };