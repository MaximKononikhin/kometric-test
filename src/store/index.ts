import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import api from "../services/api";

import { starships, errors } from './reducers';

const rootReducer = combineReducers({
  starships,
  errors
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);

const state = store.getState();

export type IState = typeof state;