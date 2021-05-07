import { Profile } from './../models/profile';
import * as fromProfile from './profile.actions';

export interface ProfileState {
  profile: Profile;
}

const initState: ProfileState = {
  profile: null,
};

export function profileReducer(
  state = initState,
  action: fromProfile.actions
): ProfileState {
  switch (action.type) {
    case fromProfile.SET_PROFILE:
      return {
        profile: { ...action.profile },
      };
    default:
      return state;
  }
}
