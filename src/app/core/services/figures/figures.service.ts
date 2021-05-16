import { environment } from '@environments/environment';
import { Router } from '@angular/router';
import { FigureObj } from '@core/services/models/figure';
import { SetFiguresGroupAction } from './figuresGroup.actions';
import { ResponseFiguresGroup } from './../models/responseFiguresGroup';
import { FigureGroup } from './../models/figureGroup';
import { RemoveFigureAction, SetFigureAction, SetFiguresAction } from './figures.actions';
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
  private apiUrl = environment.api_url;
  private FiguresListenerSubcription: Subscription = new Subscription();
  private FiguresGroupListenerSubcription: Subscription = new Subscription();

  constructor(private http: HttpClient, private store: Store<AppState>, private router: Router) {}

  private getAllFigures(): Observable<Figure[]> {
    return this.http.get<ResponseFigures>(`${this.apiUrl}/figure`).pipe(
      map((data) => {
        // console.log(data.data)
        const dataNew = data.data.map((figureObj) =>  new Figure(figureObj));
        // console.log(dataNew);

        return dataNew;
      })
    );
  }

  private getAllFiguresGroup(): Observable<FigureGroup[]> {
    return this.http.get<ResponseFiguresGroup>(`${this.apiUrl}/groupfigure`).pipe(
      map((data) => {
        const dataNew = data.data.map((figuresGroupObj) => new FigureGroup(figuresGroupObj));
        return dataNew;
      })
    );
  }

  // no encontre bien el tipo de respuesta de la api por eso deje any en este caso
  private createFigure(figure: FigureObj): Observable<any>{
    return this.http.post(`${this.apiUrl}/figure`, figure ,{
      responseType: 'json',
    });
  }

  addFigureToStore(figure: FigureObj): void {
    this.createFigure(figure).subscribe( data =>{
      if(!data){
        return;
      }
      this.store.dispatch( new SetFigureAction(new Figure(figure)));
      this.router.navigate(['dashboard/figures']);
    });
  }

  private getAllFiguresGroupById(id: string): Observable<Figure[]>{
    return this.http.get<ResponseFigures>(`${this.apiUrl}/figure/group/${id}`)
    .pipe(
      map((data) => {
        const dataNew = data.data.map((figureObj) => {
          return new Figure(figureObj);
        });
        return dataNew;
      })
    );
  }

  addFiguresGroupByIdToStore(id: string): void{
    this.getAllFiguresGroupById(id).subscribe( figuresGroup => {
      this.store.dispatch(new SetFiguresAction( figuresGroup));
    });
  }

  private deleteFigure(id : number): Observable<ResponseFigures>{
    return this.http.delete<ResponseFigures>(`${this.apiUrl}/figure/${id}`);
  }
  removeFigureToStore(id: number):void{
    this.deleteFigure(id).subscribe( data => {
      console.log(data.errors)
      if(data.errors){
        
        return
      }
      this.store.dispatch( new RemoveFigureAction(id))
    }, error => {

    } )
  }

  addFiguresToStore(): void {
    this.FiguresListenerSubcription = this.getAllFigures().subscribe(
      (figures) => {
        if (!figures) {
          return;
        }
        this.store.dispatch(new SetFiguresAction(figures));
      }
    );
  }

  addFiguresGroupToStore(): void {
    this.FiguresGroupListenerSubcription = this.getAllFiguresGroup().subscribe(
      (figuresGroup) => {
        if (!figuresGroup) {
          return;
        }
        this.store.dispatch(new SetFiguresGroupAction(figuresGroup));
      }
    );
  }

  initFiguresListener(): void {
    this.addFiguresToStore();
    
  }
  initFiguresGroupListener(): void{
    this.addFiguresGroupToStore();
  }

  canselFiguresGroupListener(): void {
    this.FiguresGroupListenerSubcription.unsubscribe();
  
  }

  canselFiguresListener(): void {
    this.FiguresListenerSubcription.unsubscribe();
  }

  canselSubscriptions(): void {
    this.FiguresListenerSubcription.unsubscribe();
    this.FiguresGroupListenerSubcription.unsubscribe();
  }
}
