import { User } from './../models/user';

import * as fromAuth from './auth.actions'

export interface AuthState{
  user: User;
}

const initState: AuthState ={
  user: {
    username: undefined,

  }
};

export function authReducer( state = initState, action: fromAuth.actions): AuthState{
  switch (action.type){
    case fromAuth.SET_USER:
      return {
        user: { ... action.user}
      };
    default:
      return state;
  }
}