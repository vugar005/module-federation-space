import { createReducer, on } from '@ngrx/store';
import { PortfolioActions } from 'core/actions';

export const featureKey = 'portfolio';

export interface State {
    watchList: string[];
}

const initialState: State = {
  watchList: [],
};

export const reducer = createReducer(
  initialState,
  // Even though the `state` is unused, it helps infer the return type
  on(PortfolioActions.addToWatchList, (state, action) => ({
      ...state,
      watchList: [
          ...state.watchList,
          action.payload
      ]
  })),
  on(PortfolioActions.removeFromWatchlist, (state, action) => ({
    ...state,
    watchList: state.watchList.filter(item => item !== action.payload)
})),
);

export const selectWatchlist = (state: State) => state.watchList;