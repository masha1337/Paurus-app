import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {OverviewComponent} from './overview/overview.component';
import { TableComponent } from './overview/table/table.component';
import {TableModule} from 'primeng/table';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoginService } from '../auth/login/login.service';
import { StudentsComponent } from './students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import { CommonModule } from '@angular/common';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
    declarations: [
        SharedComponent,
        OverviewComponent,
        TableComponent,
        StudentsComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        HttpClientModule,
        SharedRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        MultiSelectModule,
        ButtonModule,
        ProgressSpinnerModule
    ],
    providers: [LoginService],
  })
  export class SharedModule { }