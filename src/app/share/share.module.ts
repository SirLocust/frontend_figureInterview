import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors/errors.component';



@NgModule({
  declarations: [
    ErrorsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ErrorsComponent,
    FontAwesomeModule
  ]
})
export class ShareModule { }
