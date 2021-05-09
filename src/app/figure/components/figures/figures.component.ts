import { Subscription } from 'rxjs';
import { AppState } from './../../../app.reducer';
import { Store } from '@ngrx/store';
import { Figure, FigureObj } from './../../../core/services/models/figure';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss'],
})
export class FiguresComponent implements OnInit {
  figures: Figure[];
  tmpFigures: FigureObj[] = [
    {
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
        1,
      ],
    },
    {
      id_grupofigure: 2,
      figurename: 'Cuatro Esquinas 2',
      positions: [1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,],
    },
    {
      id_grupofigure: 2,
      figurename: 'Cuatro Esquinas 2',
      positions: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,],
    },
    {
      id_grupofigure: 2,
      figurename: 'Cuatro Esquinas 2',
      positions: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,],
    },
    {
      id_grupofigure: 2,
      figurename: 'Cuatro Esquinas 2',
      positions: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,],
    },
    {
      id_grupofigure: 2,
      figurename: 'Cuatro Esquinas 2',
      positions: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,],
    },
    {
      id_grupofigure: 2,
      figurename: 'Cuatro Esquinas 2',
      positions: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,],
    },
    {
      id_grupofigure: 2,
      figurename: 'Cuatro Esquinas 2',
      positions: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,],
    },
  ];
  storeSubscription: Subscription = new Subscription();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select('figures').subscribe((data) => {
      this.figures = data.figures;
    });
  }
}
