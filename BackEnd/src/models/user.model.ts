import { model, Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
    name: string;
    author: string;
    photo: string;
}

const schema = new Schema(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        photo: { type: String },
    },
    { timestamps: true }
);

export const RecipeModel = model<UserDocument>('users', schema);