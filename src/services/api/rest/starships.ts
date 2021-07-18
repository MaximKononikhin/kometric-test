import makeRequest from "../makeRequest";

export const getAllStarships = (page: number) => makeRequest({url: `?page=${page}`});
