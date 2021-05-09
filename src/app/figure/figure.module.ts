import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FigureRoutingModule } from './figure-routing.module';
import { PageFigureComponent } from './page-figure/page-figure.component';
import { FigureCardComponent } from './components/figure-card/figure-card.component';
import { FiguresComponent } from './components/figures/figures.component';


@NgModule({
  declarations: [
    PageFigureComponent,
    FigureCardComponent,
    FiguresComponent
  ],
  imports: [
    CommonModule,
    FigureRoutingModule
  ]
})
export class FigureModule { }
