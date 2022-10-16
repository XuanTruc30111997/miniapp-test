import fooDetailService from "../foo";
import { FooParams } from 'shared';

export const fooDetailResolver = async(
    params: FooParams
) => {
    console.log(`ahihi_params`, params);
    const response = await fooDetailService.getFooService(params);

    return response;
}