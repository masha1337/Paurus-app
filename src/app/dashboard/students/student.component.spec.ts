import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {StudentsComponent} from './students.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';

const FirestoreStub = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({foo: 'bar'}),
      set: (_d: any) => new Promise((resolve, _reject) => resolve()),
    }),
  }),
};


describe('StudentComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        StudentsComponent
      ],
      providers: [
        {provide: AngularFirestore, useValue: FirestoreStub},
      ],
    }).compileComponents();
  }));

  it('the substraction of the two three digit numbers of the id, should be a Fibonacci number', () => {
    let component: StudentsComponent;
    const fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    const fibonacciNumbers = [144, 233, 377, 610];
    const generatedId = component.generateId();
    const idArray = generatedId.match(/.{1,3}/g);
    const substraction = +idArray[0] - +idArray[1];
    expect(fibonacciNumbers).toContain(substraction);
  });
});
