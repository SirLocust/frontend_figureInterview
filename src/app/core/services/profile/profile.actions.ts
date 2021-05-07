import { Profile } from './../models/profile';
import { Action } from '@ngrx/store';

export const SET_PROFILE = '[Profile] Set Profile';

export class SetProfileAction implements Action {
  readonly type = SET_PROFILE;
  constructor(public profile: Profile) {}
}

export type actions = SetProfileAction;
