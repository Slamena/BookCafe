import { FastifyPluginAsync, FastifyInstance } from 'fastify';
import { BookModel } from '../../models/books.model';

export const booksList: FastifyPluginAsync = async (app: FastifyInstance) => {
    app.get('/', async (request:any, reply:any) => {
        const books = await BookModel.find();

        return books;
    });
}