import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from './students.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/alert/alert.service';
import { Student, Course } from 'src/app/dashboard/models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {
    addStudentForm: FormGroup;
    loading = false;
    availableCourses: Observable<any[]>;
    selectedCourse: Course;
    totalStudentCount: number;

    constructor(private fb: FormBuilder,
      private studentsService: StudentsService,
      private firestore: AngularFirestore,
      private alertService: AlertService){
    }

    ngOnInit(): void {
      this.firestore.collection('students').valueChanges().subscribe(result => this.totalStudentCount = result.length);
      this.availableCourses = this.firestore.collection('courses').valueChanges();
      this.addStudentForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        courses: [[],[Validators.required]]
      });
    }

    saveNewStudent() {
      this.loading = true;
      this.addStudentForm.value.id = this.generateId();
      this.addStudentForm.value.count = this.totalStudentCount;
      this.studentsService.addNewStudent(this.addStudentForm.value).then(() => {
        this.alertService.displayAlertChange({type: 'success', message: 'Student successfully saved.'});
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
        this.alertService.displayAlertChange({type: 'error', message: error.message});
      });
    }

    generateId(): string {
      const fibonacciNumbers = [144, 233, 377, 610];
      const min = 100;
      const max = 999;
      const randomFibonacci = fibonacciNumbers[Math.floor(Math.random() * fibonacciNumbers.length)];
      const primaryIdSegment = Math.floor(Math.random() * (max - (randomFibonacci + min) + 1)) + (randomFibonacci + min);
      const secondaryIdSegment = primaryIdSegment - randomFibonacci;
      return `${primaryIdSegment}${secondaryIdSegment}${randomFibonacci}`;
    }
}