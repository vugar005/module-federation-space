import { createSelector, createFeatureSelector, Action, ActionReducerMap } from '@ngrx/store';

import * as fromPortfolio from 'core/reducers/portfolio.reducer';
import * as fromCart from 'core/reducers/cart.reducer';
import { InjectionToken } from '@angular/core';

export interface AppState {
  [fromPortfolio.featureKey]: fromPortfolio.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    [fromPortfolio.featureKey]: fromPortfolio.reducer,
    [fromCart.featureKey]: fromCart.reducer,
  }),
});

/**
 * Portfolio Selectors
 */
export const selectPortfolioState = createFeatureSelector<fromPortfolio.State>(fromPortfolio.featureKey);

export const selectPortfolioWatchlist = createSelector(selectPortfolioState, fromPortfolio.selectWatchlist);

export const selectCartState = createFeatureSelector<fromCart.CardState>(fromCart.featureKey);
export const selectCartItems = createSelector(selectCartState, fromCart.selectCartItems);
