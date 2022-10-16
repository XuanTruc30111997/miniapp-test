import { from, HttpLink } from "@apollo/client";

// TODO: using in shared
const GRAPHQL_PATH = '/v1/testing/graph';

export const getHttpLink = () => {
    return new HttpLink({
        uri:`http://localhost:5001${GRAPHQL_PATH}`,
        fetch: fetch as unknown as WindowOrWorkerGlobalScope['fetch']
    });
}

export const getLink = () => {
    return from([getHttpLink()]);
}