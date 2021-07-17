import { Map } from 'immutable';

export const mapGenericList = (
  entityName: string,
  state: any,
  payload: any,
  isAppending = false
): any => {
  const { data } = payload;

  let newState = state;
  let keys = newState.get('keys');
  let entities = isAppending ? state.get(entityName) : Map({});

  data.forEach((item: any) => {
    if (!keys.includes(item.id)) {
      keys = keys.push(item.id);
    }

    const mappedItem = Map(item);
    entities = entities.set(item.id, mappedItem);
  });

  newState = newState.set(entityName, entities).set('keys', keys);

  return newState;
};
