import { Figure } from './../models/figure';
import { Action } from '@ngrx/store';


export const SET_FIGURES = '[Figures] Set figures';

export class SetFiguresAction implements Action{
  readonly type = SET_FIGURES;
  constructor(public figures: Figure[]) {}
}

export type actions = SetFiguresAction;

