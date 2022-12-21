import { FastifyPluginAsync, FastifyInstance } from 'fastify';
import { NotFound , BadRequest } from 'http-errors';
import { isEmpty } from 'ramda';
import { BookModel } from '../../models/books.model';
import { Types } from 'mongoose'

export const bookDelete: FastifyPluginAsync = async (app: FastifyInstance) => {
    app.delete<{ Params: { bookID: string } }> ('/:bookID', async (request:any, reply:any) => {
        const { bookID } = request.params;

        if (isEmpty(bookID)) {
            throw new BadRequest('recipe id must be defined');
        }

        if (!Types.ObjectId.isValid(bookID)) {
            throw new BadRequest('recipe id must be a valid id');
        }

        const recipeIdDoc = await BookModel.findById(bookID);

        if (!recipeIdDoc) {
            throw new NotFound('recipe does not exist');
        }

        const doc = await BookModel.findByIdAndDelete(bookID);
        return {
            status: 'deleted',
        };
    });
};
