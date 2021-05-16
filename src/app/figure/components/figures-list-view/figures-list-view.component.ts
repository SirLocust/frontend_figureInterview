import { Component, OnInit, OnDestroy } from '@angular/core';
import { FiguresService } from '@core/services/figures/figures.service';
import { Figure,  } from '@core/services/models/figure';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-figures-list-view',
  templateUrl: './figures-list-view.component.html',
  styleUrls: ['./figures-list-view.component.scss'],
})
export class FiguresListViewComponent implements OnInit, OnDestroy {
  figures: Figure[];

  storeSubscription: Subscription = new Subscription();
  constructor(private store: Store<AppState> , private figuresServices: FiguresService) {
    this.figuresServices.initFiguresListener();
  }
 

  ngOnInit(): void {
    this.storeSubscription = this.store.select('figures').subscribe((data) => {
      this.figures = data.figures;
    });
  }

  ngOnDestroy(): void {
    this.figuresServices.canselFiguresListener();
  }
}
