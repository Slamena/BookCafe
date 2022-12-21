

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4500;

const default_connection = 'mongodb://localhost:27017/book_club';
export const DB_URL: string = process.env.DB_URL || default_connection;