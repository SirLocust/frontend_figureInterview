import { FigureGroup } from './../models/figureGroup';
import * as fromFiguresGroup from './figuresGroup.actions';

export interface FiguresGroupState{
  figuresGroup: FigureGroup[];
}

const initState: FiguresGroupState = {
  figuresGroup: [],
};

export function figuresGroupReducer(state = initState , action: fromFiguresGroup.actions): FiguresGroupState{
  switch (action.type) {
    case fromFiguresGroup.SET_FIGURES_GROUP:
      return {
        figuresGroup: [...action.figuresGroup],
      };
    default:
      return state;
  }
}