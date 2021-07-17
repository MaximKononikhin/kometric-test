import { Dispatch } from "redux";
import { getAllStarships } from "../../services/api/rest/starships";

export const fetchStarships = () => async () => {
    const data = await getAllStarships();
    console.log(data);
} 