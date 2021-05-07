export class Figure {
  groupFigureId: number;
  name: string;
  positions: number[];
  constructor( figureObj: FigureObj) {
    this.groupFigureId = figureObj.id_grupofigure;
    this.name = figureObj.figurename;
    this.positions = figureObj.positions;
  }
}

export interface FigureObj {
  id_grupofigure: number;
  figurename: string;
  positions: number[];
}
