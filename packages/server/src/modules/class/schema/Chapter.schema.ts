import mongoose, { Document, Schema } from "mongoose";

import { IChapter } from '../dtos/IChapter.dto';

type ChapterDocument = Document & IChapter;

const ChapterSchema = new Schema(
    {
        title: {
            type: String
        },
        banner: {
            type: String
        },
        hide: {
            type: Boolean
        },
        content: {
            type: String
        }
    },
    {
        timestamps: true
    },
)

const Chapter = mongoose.model<ChapterDocument>('Chapter', ChapterSchema);

export { Chapter };