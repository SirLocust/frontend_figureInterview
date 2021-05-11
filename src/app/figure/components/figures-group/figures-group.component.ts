import { AppState } from './../../../app.reducer';
import { Store } from '@ngrx/store';
import { FigureGroup, FigureGroupObj } from './../../../core/services/models/figureGroup';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FiguresService } from '@core/services/figures/figures.service';

@Component({
  selector: 'app-figures-group',
  templateUrl: './figures-group.component.html',
  styleUrls: ['./figures-group.component.scss'],
})
export class FiguresGroupComponent implements OnInit {
  figuresGroup: FigureGroup[];
  tmpFiguresGroup: FigureGroupObj[] = [
    {
      id: 1,
      name: "Modalidad 1",
      oportunity: 1,
      closegame_at: 1
    },
    {
      id: 2,
      name: "Modalidad 2",
      oportunity: 1,
      closegame_at: 1
    },
    {
      id: 3,
      name: "Modalidad 3",
      oportunity: 1,
      closegame_at: 1
    },
    {
      id: 4,
      name: "Modalidad 4",
      oportunity: 1,
      closegame_at: 1
    }
  ];
  form: FormGroup;
  constructor(private store: Store<AppState>,
    private figuresServices: FiguresService) {
    this.form = this.buildForm();
    this.form.valueChanges.subscribe( (data) => {
      this.callService(data.formGroupID);
    });
  }

  ngOnInit(): void {
    this.store.select('figuresGroup').subscribe( data => {
      this.figuresGroup = data.figuresGroup;
    });
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      formGroupID: new FormControl(''),
    });
  }

  private callService(id: string): void{
    this.figuresServices.addFiguresGroupByIdToStore(id);
  }
}
