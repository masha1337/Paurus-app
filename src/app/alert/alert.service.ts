import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AlertService {
    private alertSource = new BehaviorSubject<string>('');

    displayAlert = this.alertSource.asObservable();

    displayAlertChange(action: string) {
        this.alertSource.next(action);
      }
}