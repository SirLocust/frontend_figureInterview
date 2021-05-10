import { AppState } from './../../../app.reducer';
import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss'],
})
export class FiguresComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
