import { Method } from "axios";

export type IMakeRequest = {
    url: string,
    method?:  Method,
    headers?: any;
    params?: any;
    data?: any;
};
