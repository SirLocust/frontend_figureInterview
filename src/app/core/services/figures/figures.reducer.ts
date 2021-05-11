import { Figure } from './../models/figure';

import * as fromFigures from './figures.actions';
export interface FiguresState {
  figures: Figure[];
}

const initState: FiguresState = {
  figures: [],
};

export function figuresReducer(
  state = initState,
  action: fromFigures.actions
): FiguresState {
  switch (action.type) {
    case fromFigures.SET_FIGURES:
      return {
        figures: [...action.figures],
      };
    case fromFigures.SET_FIGURE:
      return{
        figures: [action.figure, ...state.figures]
      };
    default:
      return state;
  }
}
