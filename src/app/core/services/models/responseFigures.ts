import { FigureObj } from './figure';
export interface ResponseFigures {
  data: FigureObj[];
  message: string;
  errors: string;
}
