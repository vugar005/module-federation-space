import { createAction, props } from '@ngrx/store';

export const addToWatchList = createAction('[MAIN PAGE] Add to Watchlist', props<{ payload: string }>());
