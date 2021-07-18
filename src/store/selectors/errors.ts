import { createSelector } from "reselect";
import { IState } from "..";

export const storedErrors = (store: IState, props: any) => (
    store.errors.get('errors')
);

export const ownErrorId = (store: IState, props: { itemId: string }) => props.itemId;

export const getNotFoundError = createSelector(storedErrors, ownErrorId, (errors: any, id: string) => {
    const error = errors.get(`${id}`);
    
    return error ? error : null;
});