
import { List, Map } from 'immutable';
import { SET_NOT_FOUND } from '../../common/constants/actions/errors';

export const defaultState = Map({
  errors: Map({}),
});

const state = (starships = defaultState, { type, payload }: any): typeof defaultState => {
    let newState: Map<string, any> = starships;
  
    switch (type) {
      case SET_NOT_FOUND: {
        let errors = newState.get('errors');
        errors = errors.set(payload, 404);
        newState = newState.set('errors', errors);
      }

      default:
    }
  
    return newState;
  };
  
  export default state;