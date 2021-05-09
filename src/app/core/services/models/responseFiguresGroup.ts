import { FigureGroupObj } from './figureGroup';
export interface ResponseFiguresGroup {
  data: FigureGroupObj[] ;
  message: string;
  errors: string;
}