import { createSelector, createFeatureSelector, Action, ActionReducerMap } from '@ngrx/store';

import * as fromPortfolio from 'core/reducers/portfolio.reducer';
import { InjectionToken } from '@angular/core';

export interface AppState {
  [fromPortfolio.featureKey]: fromPortfolio.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    [fromPortfolio.featureKey]: fromPortfolio.reducer,
  }),
});

/**
 * Portfolio Selectors
 */
export const selectPortfolioState = createFeatureSelector<fromPortfolio.State>(fromPortfolio.featureKey);

export const selectPortfolioWatchlist = createSelector(selectPortfolioState, fromPortfolio.selectWatchlist);
