import * as fromUi from '../Ui/ui.actions';

export interface UiState {
  loginLoading: boolean;
}

const initState: UiState = {
  loginLoading: false,
};

export function uiReducer(state = initState, action: fromUi.actions): UiState {
  switch (action.type) {
    case fromUi.ACTIVE_LOADING_LOGIN:
      return {
        loginLoading: true,
      };
    case fromUi.DESACTIVE_LOADING_LOGIN:
      return {
        loginLoading: false,
      };
    default:
      return state;
  }
}
