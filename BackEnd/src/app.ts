import { FastifyPluginAsync } from "fastify";
import { DB_URL } from "./config";
import mongoose from 'mongoose';
import fastifyCors from '@fastify/cors';

const booksPlugin: FastifyPluginAsync = async (app) => {
    await app.register();
    await app.register();
    await app.register();
    await app.register();
};

export const app: FastifyPluginAsync = async (app) => {
    await app.register(fastifyCors);

    // DB connection
    mongoose.connect(DB_URL);

    // Custom Routes
    await app.register(booksPlugin, { prefix: 'books' });
}