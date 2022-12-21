import { model, Schema, Document } from 'mongoose';

export interface BooksDocument extends Document {
    name: string;
    author: string;
    sinopsis: string;
    rate: number;
    img: string;
}

const schema = new Schema(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        sinopsis: { type: String, required: true },
        rate: { type: Number, required: true },
        img: { type: String },
    },
    { timestamps: true }
);

export const BookModel = model<BooksDocument>('book', schema);