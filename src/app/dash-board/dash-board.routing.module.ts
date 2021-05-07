
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
   component: PageDashboardComponent,
   children: [
    { path: 'profile' , loadChildren: () => import('../profile/profile.module').then((m)=> m.ProfileModule)},
    { path: '**', redirectTo: '/dashboard/profile' , pathMatch: 'full' },
   ]


  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
