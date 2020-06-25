import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {path: 'overview', component: SharedComponent, children: [
      {path: '', component: OverviewComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }