import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
    cols = [
    { field: 'firstName', header: 'First name' },
    { field: 'lastName', header: 'Last name' }
  ];
  tableData = [{firstName: 'LULU', lastName: 'BUBU'}];
}