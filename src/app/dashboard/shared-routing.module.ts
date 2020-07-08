import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {SharedComponent} from './shared.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: '', component: SharedComponent, 
   children: [
      {path: '', component: OverviewComponent},
      {path: 'students', component: StudentsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }