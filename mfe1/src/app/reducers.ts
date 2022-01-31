import { createSelector, Action, ActionReducerMap } from '@ngrx/store';

import * as fromUI from './core/reducers/ui.reducer';
import { InjectionToken } from '@angular/core';
import { UIState } from './core/reducers/ui.reducer';

export interface MFE1State {
  [fromUI.featureKey]: fromUI.UIState;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<MFE1State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromUI.featureKey]: fromUI.reducer,
  }),
});

/**
 * UI Selectors
 */

export const selectUIState = (state: MFE1State): UIState => state.UI;
export const selectUIWatchlist = createSelector(
  selectUIState,
  (state) => state.watchlist
);
