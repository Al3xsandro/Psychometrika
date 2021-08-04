import mongoose, { Document, Schema } from "mongoose";

import { IClass } from '../dtos/IClass.dto';

type ClassDocument = Document & IClass;

const ClassSchema = new Schema(
    {
        title: {
            type: String
        }
    },
    {
        timestamps: true
    },
)

const Class = mongoose.model<ClassDocument>('Class', ClassSchema);

export { Class };