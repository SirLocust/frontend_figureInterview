import { Figure } from './../models/figure';
import { Action } from '@ngrx/store';


export const SET_FIGURES = '[Figures] Set figures';
export const SET_FIGURE = '[Figures] Set figure'
export class SetFiguresAction implements Action{
  readonly type = SET_FIGURES;
  constructor(public figures: Figure[]) {}
}
export class SetFigureAction implements Action{
  readonly type = SET_FIGURE;
  constructor(public figure: Figure){}
}

export type actions = SetFiguresAction | SetFigureAction;


