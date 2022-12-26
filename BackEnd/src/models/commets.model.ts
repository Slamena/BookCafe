import { model, Schema, Document } from 'mongoose';

export interface CommentDocument extends Document {
    user: string;
    comment: string;
    rate: number;
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

export const RecipeModel = model<CommentDocument>('comment', schema);