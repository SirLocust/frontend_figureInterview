export class FigureGroup{
  id: number;
  name: string;
  oportunity: number;
  closeAt: number;
  constructor( figureGroupObj: FigureGroupObj){
    this.id = figureGroupObj.id;
    this.name = figureGroupObj.name;
    this.oportunity = figureGroupObj.oportunity;
    this.closeAt = figureGroupObj.closegame_at;


  }
}

export class FigureGroupObj{
  id: number;
  name: string;
  oportunity: number;
  closegame_at: number;
}
