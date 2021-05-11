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
  idGroup: string;
  constructor(
    private figuresServices: FiguresService) {
  }

  ngOnInit(): void {
   
  }

  

  callService(id: string): void{
    this.figuresServices.addFiguresGroupByIdToStore(id);
  }
  
}
