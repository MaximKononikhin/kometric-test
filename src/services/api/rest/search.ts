import makeRequest from "../makeRequest";

export const makeSearchRequest = (val: string) => makeRequest({url: `?search=${val}`})