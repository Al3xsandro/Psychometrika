import mongoose, { Document, Schema } from "mongoose";

import { IClass } from '../dtos/IClass.dto';

type ClassDocument = Document & IClass;

const ClassSchema = new Schema(
    {
        title: {
            type: String
        },
        class: {
            type: Number
        },
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }
    },
    {
        timestamps: true
    },
)

const Class = mongoose.model<ClassDocument>('Class', ClassSchema);

export { Class };