import { Action } from '@ngrx/store';


export const ACTIVE_LOADING_LOGIN = '[UI] Active loading login';
export const DESACTIVE_LOADING_LOGIN = '[UI] Desactive loading login';



export class SetActiveLoadingLogin implements Action{
  readonly type = ACTIVE_LOADING_LOGIN;
  
}
export class SetDesactiveLoadingLogin implements Action{
  readonly type = DESACTIVE_LOADING_LOGIN;
  
}

export type actions = SetActiveLoadingLogin | SetDesactiveLoadingLogin ;