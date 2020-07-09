import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Course, Professor, Student} from 'src/app/dashboard/models';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()

export class OverviewService {
  constructor(private firestore: AngularFirestore) {
  }

  getStudents(startAt: number, limit: number): Observable<any> {
    return this.firestore.collection('students', ref => ref
      .limit(limit)
      .orderBy('count')
      .startAt(startAt)
    ).snapshotChanges().pipe(
      map(res => res.map(data => this.mapToStudentModel(data)))
    )
  }

  getProfessors(startAt: number, limit: number): Observable<Professor[]> {
    return this.firestore.collection('professors', ref => ref
      .limit(limit)
      .orderBy('count')
      .startAt(startAt)
    ).snapshotChanges().pipe(
      map(res => res.map(data => this.mapToProfessorModel(data)))
    )
  }

  getAvailableCourses(startAt: number, limit: number): Observable<Course[]> {
    return this.firestore.collection('courses', ref => ref
      .limit(limit)
      .orderBy('count')
      .startAt(startAt)
    ).snapshotChanges().pipe(
      map(res => res.map(data => this.mapToCourseModel(data)))
    )
  }

  mapToStudentModel(data) {
    const student = new Student(data.payload.doc.data(), data.payload.doc.id);
    return student;
  }

  mapToCourseModel(data) {
    const course = new Course(data.payload.doc.data(), data.payload.doc.id);
    return course;
  }

  mapToProfessorModel(data) {
    const professor = new Professor(data.payload.doc.data(), data.payload.doc.id);
    return professor;
  }
}
