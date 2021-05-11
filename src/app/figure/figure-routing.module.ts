import { GenereteFigureComponent } from './components/generete-figure/generete-figure.component';
import { FiguresGroupComponent } from './components/figures-group/figures-group.component';
import { FiguresComponent } from './components/figures/figures.component';
import { PageFigureComponent } from './page-figure/page-figure.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageFigureComponent,
    children: [
      { path: 'allfigures', component: FiguresComponent },
      {path : 'allgroups', component: FiguresGroupComponent},
      {path : 'generete', component: GenereteFigureComponent },

      { path: '**', redirectTo: 'allfigures', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FigureRoutingModule {}
