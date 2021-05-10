import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FigureRoutingModule } from './figure-routing.module';
import { PageFigureComponent } from './page-figure/page-figure.component';
import { FigureCardComponent } from './components/figure-card/figure-card.component';
import { FiguresComponent } from './components/figures/figures.component';
import { FiguresListViewComponent } from './components/figures-list-view/figures-list-view.component';
import { FiguresGroupComponent } from './componentes/figures-group/figures-group.component';


@NgModule({
  declarations: [
    PageFigureComponent,
    FigureCardComponent,
    FiguresComponent,
    FiguresListViewComponent,
    FiguresGroupComponent
  ],
  imports: [
    CommonModule,
    FigureRoutingModule,
    ReactiveFormsModule
  ]
})
export class FigureModule { }
