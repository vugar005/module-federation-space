import { createReducer, on } from '@ngrx/store';
import * as UIActions from '../actions/ui.actions';

export const featureKey = 'UI';

export interface UIState {
  watchlist: string[];
}

const initialState: UIState = {
  watchlist: [],
};

export const reducer = createReducer(
  initialState,
  // Even though the `state` is unused, it helps infer the return type
  on(
    UIActions.setUIWatchlist,
    (state, action): UIState => ({
      ...state,
      watchlist: action.payload,
    })
  )
);
