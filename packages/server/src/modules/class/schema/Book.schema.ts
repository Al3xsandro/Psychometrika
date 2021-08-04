import mongoose, { Document, Schema } from "mongoose";

import { IBook } from '../dtos/IBook.dto';

type BookDocument = Document & IBook;

const BookSchema = new Schema(
    {
        title: {
            type: String
        },
        class: {
            type: Schema.Types.ObjectId,
            ref: 'Class'
        },
        chapters: {
            type: Schema.Types.ObjectId,
            ref: 'Chapter'
        },
    },
    {
        timestamps: true
    },
)

const Book = mongoose.model<BookDocument>('Book', BookSchema);

export { Book };