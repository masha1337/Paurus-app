import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Alert} from '../dashboard/models';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSource = new BehaviorSubject<Alert>({type: '', message: ''});

  displayAlert = this.alertSource.asObservable();

  displayAlertChange(action: Alert) {
    this.alertSource.next(action);
  }
}
