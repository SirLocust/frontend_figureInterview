import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';


@NgModule({
  declarations: [
    PageProfileComponent,
    ProfileItemComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
