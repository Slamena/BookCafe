import mongoose from "mongoose";
import { DB_URL } from "./config";
import { BookModel } from "./models/books.model";


(async () => {
    await mongoose.connect(DB_URL);
    try {
        await BookModel.collection.drop();
    } catch (error) {
        console.error('ERROR AL BORRAR EN LA DB');
        console.warn('NO EXISTE LA COLECCIÓN EN LA DB');
        console.info('COLECCIÓN CREADA');
    }
    await BookModel.create([
        {
            name: 'Libro1',
            author: 'Author1',
            sinopsis: 'Sinopsis1',
            rate: 0,
        },
        {
            name: 'Libro2',
            author: 'Author2',
            sinopsis: 'Sinopsis2',
            rate: 0,
        },
        {
            name: 'Libro3',
            author: 'Author3',
            sinopsis: 'Sinopsis3',
            rate: 0,
        },
        {
            name: 'Libro4',
            author: 'Author4',
            sinopsis: 'Sinopsis4',
            rate: 0,
        },
        {
            name: 'Libro5',
            author: 'Author5',
            sinopsis: 'Sinopsis5',
            rate: 0,
        },
    ]);
    console.info('CREATED BOOKS');
    await mongoose.disconnect();
})();
