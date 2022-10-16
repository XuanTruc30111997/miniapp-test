import { ApolloServer } from 'apollo-server-express';
import express from 'express';

type ServerType = {
    app: express.Application;
    server: ApolloServer;
}

export { ServerType }