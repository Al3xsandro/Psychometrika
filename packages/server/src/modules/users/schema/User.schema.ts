import mongoose, { Document, Schema } from "mongoose";

import IUser from '../dtos/IUser.dto';

type UserDocument = Document & IUser;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        admin: {
            type: Boolean,
            trim: true,
            required: true,
            default: false
        },
        class: {
            type: String,
            trim: true
        },
    },
    {
        timestamps: true
    },
)

const User = mongoose.model<UserDocument>('User', UserSchema);

export { User }