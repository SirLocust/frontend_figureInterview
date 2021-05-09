import { FigureGroup } from './../models/figureGroup';
import { Action } from '@ngrx/store';


export const SET_FIGURES_GROUP = '[Groups Figures] Set FiguresGroup';

export class SetFiguresGroupAction implements Action{
  readonly type = SET_FIGURES_GROUP;
  constructor(public figuresGroup: FigureGroup[]){}
}


export type actions = SetFiguresGroupAction;
