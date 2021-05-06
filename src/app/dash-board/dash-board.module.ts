import { DashboardRoutingModule } from './dash-board.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    PageDashboardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashBoardModule { }
