import { fooDetailResolver } from "./fooDetails.handler";

const resolvers = {
    Query: {
        fooDetails: fooDetailResolver
    }
};

export default resolvers;