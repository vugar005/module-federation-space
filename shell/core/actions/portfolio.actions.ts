import { createAction, props } from '@ngrx/store';

export const addToWatchList = createAction('[MAIN PAGE] Add to Watchlist', props<{ payload: string }>());
export const removeFromWatchlist = createAction('[MAIN PAGE] Remove From Watchlist', props<{ payload: string }>());
