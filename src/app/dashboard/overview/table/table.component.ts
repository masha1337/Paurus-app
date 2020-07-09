import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student, TableType} from '../../models';
import {TableService} from './table.service';
import {AlertService} from '../../../alert/alert.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {LazyLoadEvent} from 'primeng/api/public_api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService]
})
export class TableComponent {
  @Input() cols: any[];
  @Input() tableData: any[];
  @Input() tableType: TableType;
  @Output() pageChange = new EventEmitter<any>();
  TABLE_TYPE = TableType;
  totalRecords = 30;
  availableCourses = this.firestore.collection('courses').valueChanges();

  constructor(private tableService: TableService,
              private alertService: AlertService,
              private firestore: AngularFirestore) {
  }

  onRowEditSave(student: Student) {
    this.updateRow(student);
  }

  lazyLoad(event: LazyLoadEvent) {
    this.pageChange.emit({startAt: event.first, tableType: this.tableType});
  }

  updateRow(rowData: Student) {
    this.tableService.updateItem(rowData).then((res) => {
        this.alertService.displayAlertChange({
          type: 'success',
          message: `Student "${rowData.firstName} ${rowData.lastName}" successfully updated.`
        });
      })
      .catch((error) => {
        this.alertService.displayAlertChange({type: 'error', message: error.message});
      });
  }

  deleteRow(rowData: Student) {
    this.tableService.deleteItem(rowData).then((res) => {
        this.alertService.displayAlertChange({
          type: 'success',
          message: `Student "${rowData.firstName} ${rowData.lastName}" successfully deleted.`
        });
      })
      .catch((error) => {
        this.alertService.displayAlertChange({type: 'error', message: error.message});
      });
  }
}
