export class Figure {
  groupFigureId: number;
  name: string;
  positions: number[];
  id: number;
  constructor( figureObj: FigureObj) {
    this.groupFigureId = figureObj.idFigureGroup;
    this.name = figureObj.figureName;
    this.positions = figureObj.positions;
    this.id = figureObj.id || 0;
  }
}

export interface FigureObj {
  idFigureGroup: number;
  figureName: string;
  positions: number[];
  id?: number;
}


