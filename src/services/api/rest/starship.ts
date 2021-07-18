import makeRequest from "../makeRequest";

export const getStarship = (id: string) => makeRequest({url: `/${id}`});