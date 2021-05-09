import * as fromAuth from '@core/services/auth/auth.reducer';
import * as fromProfile from '@core/services/profile/profile.reducer';
import * as fromFigures from '@core/services/figures/figures.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  profile: fromProfile.ProfileState;
  figures: fromFigures.FiguresState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  profile: fromProfile.profileReducer,
  figures: fromFigures.figuresReducer,
};
