import * as fromAuth from '@core/services/auth/auth.reducer';
import * as fromProfile from '@core/services/profile/profile.reducer';
import * as fromFigures from '@core/services/figures/figures.reducer';
import * as fromFiguresGroup from '@core/services/figures/figuresGroup.reducer'
import * as fromUi from '@core/services/Ui/ui.reducer'

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  profile: fromProfile.ProfileState;
  figures: fromFigures.FiguresState;
  figuresGroup: fromFiguresGroup.FiguresGroupState;
  ui: fromUi.UiState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  profile: fromProfile.profileReducer,
  figures: fromFigures.figuresReducer,
  figuresGroup: fromFiguresGroup.figuresGroupReducer,
  ui: fromUi.uiReducer,
};
