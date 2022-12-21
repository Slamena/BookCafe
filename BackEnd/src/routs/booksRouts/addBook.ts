import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { BookModel, BooksDocument } from "../../models/books.model";
import { isEmpty } from "../../utils/isEmpty";
import { BadRequest } from 'http-errors';

export const bookCreate: FastifyPluginAsync = async (app: FastifyInstance) => {
    app.post<{ Body:BooksDocument }>('/add', async (request:any, reply:any) => {
        
        const { name, author, sinopsis} = request.body;
        const rate = 0;


        return {
            status: 'created',
        };
    });
}