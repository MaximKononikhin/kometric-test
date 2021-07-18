import { Dispatch } from "redux";
import { SET_NOT_FOUND } from "../../common/constants/actions/errors";
import { ADD_TO_COMPARE, DELETE_FROM_COMPARE, FETCH_STARSHIP, FETCH_STARSHIPS, SEARCH_STARSHIPS } from "../../common/constants/actions/starships";
import api from '../../services/api/index'

export const fetchStarships = (page = 1) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.starships(page);

        return dispatch({ type: FETCH_STARSHIPS, payload: data })
    } catch (e) {
        console.log(e);
    }
}

export const fetchStarship = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getStarship(id);
        return dispatch({ type: FETCH_STARSHIP, payload: data })
    } catch (e) {
        return dispatch({ type: SET_NOT_FOUND, payload: id });
    }
}

export const searchStarships = (search: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.searchStarships(search);

        return dispatch({ type: SEARCH_STARSHIPS, payload: data });
    } catch (e) {
        console.log(e);
    }
}

export const addToCompare = (id: string) => ({ type: ADD_TO_COMPARE, payload: id });

export const deleteFromCompare = (id: string) => ({ type: DELETE_FROM_COMPARE, payload: id });

