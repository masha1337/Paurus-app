import {Component, OnInit} from '@angular/core';
import {Course, Professor, Student, TableType} from '../models';
import {combineLatest} from 'rxjs';
import {OverviewService} from './overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [OverviewService]
})
export class OverviewComponent implements OnInit {
  studentData: Student[];
  professorData: Professor[];
  courseData: Course[];
  TABLE_TYPE = TableType;
  limit = 20;
  dataLoaded: boolean;
  studentCols = [
    {field: 'firstName', header: 'First name'},
    {field: 'lastName', header: 'Last name'},
    {field: 'courses', header: 'Courses'}
  ];
  professorCols = [
    {field: 'firstName', header: 'First name'},
    {field: 'lastName', header: 'Last name'},
    {field: 'course', header: 'Course'}
  ];
  courseCols = [
    {field: 'name', header: 'Course name'},
    {field: 'professor', header: 'Professor'},
    {field: 'students', header: 'Students'}
  ];

  constructor(private overviewService: OverviewService) {
  }

  ngOnInit(): void {
    combineLatest([
      this.overviewService.getStudents(0, this.limit),
      this.overviewService.getProfessors(0, this.limit),
      this.overviewService.getAvailableCourses(0, this.limit)
    ]).subscribe(([students, professors, courses]) => {
      this.studentData = students;
      this.professorData = professors;
      this.courseData = courses;
      this.dataLoaded = true;
    })
  }

  onPageChange(data: any) {
    switch (data.tableType) {
      case TableType.Students: {
        this.overviewService.getStudents(data.startAt, this.limit).subscribe(res => {
          this.studentData = res;
        });
        break;
      }
      case TableType.Courses: {
        this.overviewService.getAvailableCourses(data.startAt, this.limit).subscribe(res => {
          this.courseData = res;
        });
        break;
      }
      case TableType.Professors: {
        this.overviewService.getProfessors(data.startAt, this.limit).subscribe(res => {
          this.professorData = res;
        });
        break;
      }
      default: {
        break;
      }
    }
  }
}
