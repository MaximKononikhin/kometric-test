import { createSelector } from 'reselect';
import { Collection, List } from 'immutable';
import { IState } from '..';

export const storedStarships = (store: IState, props: any) => (
    store.starships.get('starships')
);

export const storedComparedStarships = (store: IState, props: any) => (
    store.starships.get('comparedShips')
);

export const ownStarshipId = (store: IState, props: { itemId: string }) => props.itemId;

export const storedStarshipsIds = (store: IState, props: any) => (
    store.starships.get('keys'));

export const getAllStarshipsIds = createSelector(storedStarshipsIds, (ids: List<string>) =>  ids.toJS());

export const getAllComparedShips = createSelector(storedComparedStarships, (ships: any) => Object.values(ships.toJS()));

export const getStarship = createSelector(storedStarships, ownStarshipId, (ships: any, id: string) => {
    const ship = ships.get(`${id}`);
    return ship ? ship.toJS() : null;
});

export const getStarshipStatus = createSelector(storedComparedStarships, ownStarshipId, (ships: any, id: string) => {
    const ship = ships.get(`${id}`);
    return ship ? true : false;
});

export const getStarshipTotalCount = (store: IState) => (
    store.starships.get('count')
);

