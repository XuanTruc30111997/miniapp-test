import { ApolloClient, from, InMemoryCache, NormalizedCacheObject } from "@apollo/client"
import { getLink } from "../../repository/connectors/graphql.v1.connector";

export let client: ApolloClient<NormalizedCacheObject>;

export const useGetClient = () => {
    if (!client) {
        const link = getLink();
        client = new ApolloClient({
            cache: new InMemoryCache(),
            link: from([link])
        });
    }

    return client
}