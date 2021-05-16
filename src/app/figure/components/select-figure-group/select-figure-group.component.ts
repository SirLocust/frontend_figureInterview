import { FiguresService } from '@core/services/figures/figures.service';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FigureGroup, FigureGroupObj } from '@core/services/models/figureGroup';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-select-figure-group',
  templateUrl: './select-figure-group.component.html',
  styleUrls: ['./select-figure-group.component.scss']
})
export class SelectFigureGroupComponent implements OnInit ,OnDestroy {
  @Output() idGroup: EventEmitter<string> = new EventEmitter();
  figuresGroup: FigureGroup[];
  
  form: FormGroup;
  constructor(
    private store: Store<AppState>,
    private figureService: FiguresService,
  ) { 
    this.form = this.buildForm();
    this.form.valueChanges.subscribe( (data) => {
      this.emmitValue(data.formGroupID);
    });
    this.figureService.initFiguresGroupListener();
  }
  

  ngOnInit(): void {
    this.store.select('figuresGroup').subscribe( data => {
      this.figuresGroup = data.figuresGroup;
    });
  }

  ngOnDestroy(): void {
    console.log("destroy select")
    this.figureService.canselFiguresGroupListener();
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

