import { createAction, props } from '@ngrx/store';

export const setUIWatchlist = createAction(
  '[UI] Set Watchlist',
  props<{ payload: string[] }>()
);
