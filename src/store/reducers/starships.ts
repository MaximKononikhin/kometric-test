
import { List, Map } from 'immutable';
import { ADD_TO_COMPARE, DELETE_FROM_COMPARE, FETCH_STARSHIP, FETCH_STARSHIPS, SEARCH_STARSHIPS } from '../../common/constants/actions/starships';
import { fetchGenericEntity, fetchGenericList } from './abstract';

export const defaultState = Map({
  starships: Map({}),
  comparedShips: Map({}),
  keys: List([]) as List<string>,
  count: 0
});

const state = (starships = defaultState, { type, payload }: any): typeof defaultState => {
    let newState: Map<string, any> = starships;
  
    switch (type) {
      case FETCH_STARSHIPS: {
        newState = fetchGenericList('starships', newState, payload, true);
        break;
      }

      case SEARCH_STARSHIPS: {
        newState = newState.set('starships',  Map({})).set('keys', List([])).set('count', 0);
        newState = fetchGenericList('starships', newState, payload, true);
        break;
      }

      case ADD_TO_COMPARE: {
        const ship = newState.get('starships').get(payload).toJS();
        let comparedShips = newState.get('comparedShips');
        comparedShips = comparedShips.set(ship.id, ship);
        newState = newState.set('comparedShips', comparedShips);
        break;
      }

      case DELETE_FROM_COMPARE: {
        let comparedShips = newState.get('comparedShips');
        comparedShips = comparedShips.delete(payload);
        newState = newState.set('comparedShips', comparedShips);
        break;
      }

      case FETCH_STARSHIP: {
        newState = fetchGenericEntity('starships', newState, payload, true, true);
        break;
      }

      default:
    }
  
    return newState;
  };
  
  export default state;