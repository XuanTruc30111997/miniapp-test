import { FooParams, FooResponse } from "shared";

export class FooDetailService {
    public async getFooService(
        params: FooParams
    ): Promise<FooResponse> {
        return {
            // formatedName: `Hello ${params.name}`,
            formatedName: `Hello`,
            something: 'This is a Test'
        };
    }
}