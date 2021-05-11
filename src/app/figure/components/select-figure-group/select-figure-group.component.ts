import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FigureGroup, FigureGroupObj } from '@core/services/models/figureGroup';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-select-figure-group',
  templateUrl: './select-figure-group.component.html',
  styleUrls: ['./select-figure-group.component.scss']
})
export class SelectFigureGroupComponent implements OnInit {
  @Output() idGroup: EventEmitter<string> = new EventEmitter();
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
  constructor(
    private store: Store<AppState>,
  ) { 
    this.form = this.buildForm();
    this.form.valueChanges.subscribe( (data) => {
      this.emmitValue(data.formGroupID);
    });
  }

  ngOnInit(): void {
    this.store.select('figuresGroup').subscribe( data => {
      this.figuresGroup = data.figuresGroup;
    });
  }

  emmitValue(id :string): void{
    this.idGroup.emit(id);
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      formGroupID: new FormControl(''),
    });
  }

}

