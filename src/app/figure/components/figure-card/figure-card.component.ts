import { FiguresService } from '@core/services/figures/figures.service';
import { Figure, FigureObj } from './../../../core/services/models/figure';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figure-card',
  templateUrl: './figure-card.component.html',
  styleUrls: ['./figure-card.component.scss']
})
export class FigureCardComponent implements OnInit {
  @Input() figure: Figure;
  
  constructor(private figureService: FiguresService) { }

  ngOnInit(): void {
  }

  removeFigure(id: number): void{
    this.figureService.removeFigureToStore(id);
  }

}
