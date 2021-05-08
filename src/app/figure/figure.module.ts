import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FigureRoutingModule } from './figure-routing.module';
import { PageFigureComponent } from './page-figure/page-figure.component';


@NgModule({
  declarations: [
    PageFigureComponent
  ],
  imports: [
    CommonModule,
    FigureRoutingModule
  ]
})
export class FigureModule { }
