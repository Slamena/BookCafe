import fastify from 'fastify';
import { app } from './app';
import { PORT } from './config';

const server = fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        },
    },
    disableRequestLogging: true
});

server.register(app);

server.listen({
    host: "0.0.0.0",
    port: PORT
})