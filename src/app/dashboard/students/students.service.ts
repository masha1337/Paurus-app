import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Student} from 'src/app/dashboard/models';

@Injectable()

export class StudentsService {

  constructor(private firestore: AngularFirestore) {
  }

  addNewStudent(student: Student): Promise<any> {
    const id = this.firestore.createId();
    return this.firestore.collection<Student>('students').doc(id).set(student);
  }
}
