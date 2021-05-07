import * as fromAuth from '@core/services/auth/auth.reducer';
import * as fromProfile from '@core/services/profile/profile.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  profile: fromProfile.ProfileState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  profile: fromProfile.profileReducer,
};
