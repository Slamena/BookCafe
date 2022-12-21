import { FastifyPluginAsync } from "fastify";
import { DB_URL } from "./config";
import mongoose from 'mongoose';
import fastifyCors from '@fastify/cors';
import { bookCreate } from "./routs/booksRouts/addBook";
import { booksList } from "./routs/booksRouts/getAllBooks";
import { bookDetail } from "./routs/booksRouts/searchBook";
import { bookDelete } from "./routs/booksRouts/deleteBook";

const booksPlugin: FastifyPluginAsync = async (app:any) => {
    await app.register(bookCreate);
    await app.register(booksList);
    await app.register(bookDetail);
    await app.register(bookDelete);
};

export const app: FastifyPluginAsync = async (app:any) => {
    await app.register(fastifyCors);

    // DB connection
    mongoose.connect(DB_URL);

    // Custom Routes
    await app.register(booksPlugin, { prefix: 'books' });
}