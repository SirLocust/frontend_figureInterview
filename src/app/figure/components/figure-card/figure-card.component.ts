import { Figure, FigureObj } from './../../../core/services/models/figure';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figure-card',
  templateUrl: './figure-card.component.html',
  styleUrls: ['./figure-card.component.scss']
})
export class FigureCardComponent implements OnInit {
  @Input() figure: Figure;
  tmpFigure: FigureObj = {
    id_grupofigure: 2,
    figurename: 'Cuatro Esquinas',
    positions: [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
