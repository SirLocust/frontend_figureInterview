
import * as fromAuth from '@core/services/auth/auth.reducer'
import { ActionReducerMap } from '@ngrx/store'

export interface AppState{
  auth: fromAuth.AuthState
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer
}