import { AppError } from "../../../../shared/errors/AppError";

import { IBook } from "../../dtos/IBook.dto";
import { Book } from "../../schema/Book.schema";

class CreateBookCase {
    async execute({ title, class_id, chapter }: IBook) {
        if(!title || !class_id || !chapter){
            throw new AppError('Invalid title or class_id');
        };
        
        const bookAlreadyExists = await Book.findOne({ title });

        if(bookAlreadyExists){
            throw new AppError('This book already exists');
        };

        const createBook = await Book.create({ title, class: class_id, chapters: chapter });
    
        if(!createBook){
            throw new AppError('An error has occurred', 500);
        };

        return createBook;
    };
};

export { CreateBookCase };