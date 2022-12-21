import { FastifyPluginAsync, FastifyInstance } from 'fastify';
import { NotFound } from 'http-errors';
import { BookModel } from '../../models/books.model';

export const bookDetail: FastifyPluginAsync = async (app: FastifyInstance) => {
    app.get<{ Params: { bookID: string } }>('/:bookID', async (request:any, reply:any) => {
        const { bookID } = request.params;

        request.log.info(`Fetching data ${bookID}`);

        const doc = await BookModel.findById(bookID);

        if (!doc) {
            throw new NotFound('recipe not found');
        }

        return doc;
    });
};
