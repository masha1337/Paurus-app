import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverviewComponent} from './overview/overview.component';
import { TableComponent } from '../table/table.component';
import {TableModule} from 'primeng/table';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';

@NgModule({
    declarations: [
        SharedComponent,
        OverviewComponent,
        TableComponent
    ],
    imports: [
        BrowserAnimationsModule,
        TableModule,
        SharedRoutingModule
    ],
    providers: [],
  })
  export class SharedModule { }