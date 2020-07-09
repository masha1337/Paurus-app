import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
  }

  loginUser(loginData: any): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password);
  }

  logOutUser(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
