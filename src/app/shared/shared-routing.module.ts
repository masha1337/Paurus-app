import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {SharedComponent} from './shared.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const routes: Routes = [
  {path: 'overview', component: SharedComponent, canActivate:[AuthGuardService], children: [
      {path: '', component: OverviewComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }