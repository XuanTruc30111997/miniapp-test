import { ApolloServer, Config } from "apollo-server-express";
import express from "express";
import { GRAPHQL_PATH } from "shared";
import typeDefs from "src/controller/model/apiSchema.types";
import resolvers from "./controller";
import { ServerType } from "./server.types";
import errorHandler from "./utils/error/ErrorHandler";

async function startServer(): Promise<ServerType> {
    const app = express();

    const apolloConf: Config = {
        typeDefs,
        resolvers
    };

    app.use(errorHandler);

    const server = new ApolloServer(apolloConf);

    await server.start();
    server.applyMiddleware({ app, path:GRAPHQL_PATH});

    return { app, server };
}

export { startServer };