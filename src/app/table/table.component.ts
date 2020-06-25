import {Component, OnInit, Input} from '@angular/core';
import {Student} from './models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    @Input() cols: any[];
    @Input() tableData: any[];
    first = 0;
    rows = 10;
    students: Student[] = [];

    ngOnInit(): void {
       
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.first === (this.students.length - this.rows);
    }

    isFirstPage(): boolean {
        return this.first === 0;
    }
}