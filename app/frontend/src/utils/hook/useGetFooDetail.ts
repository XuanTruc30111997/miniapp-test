import { gql, useQuery } from '@apollo/client';

export const QUERY_GET_FOO_DETAIL = gql`
    query fooDetails($name: String!) {
        fooDetails(name: $name) {
            formatedName,
            something
        }
    }
`;

// TODO: using in shared
type FooParams = {
    name: string;
}

// TODO: using in shared
type FooResponse = {
    formatedName: string,
    something: string
}

type GraphQLFooDetailData = {
    fooDetail: FooResponse;
}

const useGetFooDetail = (name: string) => {
    const { loading, data } = useQuery<GraphQLFooDetailData, FooParams>(
        QUERY_GET_FOO_DETAIL,
        {
            variables: { name },
            fetchPolicy: 'cache-first'
        }
    );

    return { loading, data };
};

export default useGetFooDetail;