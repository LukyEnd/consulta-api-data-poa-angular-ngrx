import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as fromBus from './bus-line.reducer';
import * as fromMiniBus from './mini-bus.reducer';

export const reducers: ActionReducerMap<AppState> = {
  [fromBus.busLineFeatureKey]: fromBus.busReducer,
  [fromMiniBus.miniBusFeatureKey]: fromMiniBus.miniBusReducer,
};
