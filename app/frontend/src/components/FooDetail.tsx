import React from "react"
import useGetFooDetail from "../utils/hook/useGetFooDetail";

export const FooDetail: React.FC = () => {
    const messageRetrieved = useGetFooDetail('TrucDit');

    if (messageRetrieved.loading) {
        return <>Loading....</>;
    }

    return (
        <>${messageRetrieved.data?.fooDetail.formatedName} - ${messageRetrieved.data?.fooDetail.something} </>
    );
};