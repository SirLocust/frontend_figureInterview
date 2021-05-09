import { SetFiguresAction } from './figures.actions';
import { Figure} from './../models/figure';
import { AppState } from './../../../app.reducer';
import { ResponseFigures } from './../models/responseFigures';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FiguresService {
  apiUrl = 'https://java.bocetos.co/gamered-0.0.1-SNAPSHOT';
  FiguresListenerSubcription: Subscription = new Subscription();
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  private getAllFigures(): Observable<Figure[]> {
    return this.http.get<ResponseFigures>(`${this.apiUrl}/figure`).pipe(
      map((data) => {
        const dataNew = data.data.map((figureObj) => {
          return new Figure(figureObj);
        });
        return dataNew;
      })
    );
  }

  addFiguresToStore(): void {
    this.FiguresListenerSubcription = this.getAllFigures().subscribe(
      (figures) => {
        this.store.dispatch(new SetFiguresAction(figures));
      }
    );
  }

  initFiguresListener(): void {
    this.addFiguresToStore();
  }

  canselSubscriptions(): void {
    this.FiguresListenerSubcription.unsubscribe();
  }
}
