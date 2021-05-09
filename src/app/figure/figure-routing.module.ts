import { FiguresComponent } from './components/figures/figures.component';
import { PageFigureComponent } from './page-figure/page-figure.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PageFigureComponent , children: [
    {path: 'allFigures' , component: FiguresComponent}
  ] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FigureRoutingModule {}
