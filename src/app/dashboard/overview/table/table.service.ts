import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Student} from 'src/app/dashboard/models';

@Injectable()

export class TableService {

    constructor(private firestore: AngularFirestore) {
    }

    updateItem(student: Student): Promise<any> {
        const clonedStudent = Object.assign({}, student);
        delete clonedStudent.documentId;
        return this.firestore.collection<Student>('students').doc(student.documentId).update(clonedStudent);
    }

    deleteItem(student: Student): Promise<any> {
        return this.firestore.collection<Student>('students').doc(student.documentId).delete();
    }
}
