import { makeSearchRequest as searchStarships } from './rest/search';
import {getAllStarships as starships} from './rest/starships';
import { getStarship } from './rest/starship';

export default {
    searchStarships,
    starships,
    getStarship
};