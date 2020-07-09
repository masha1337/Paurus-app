import {Component, OnInit} from '@angular/core';
import {AlertService} from './alert.service';
import {Alert} from '../dashboard/models';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  clearMessage: any;
  alert: Alert;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.displayAlert.subscribe(alert => {
      this.alert = alert;
      clearTimeout(this.clearMessage);
      this.clearMessage = setTimeout(() => {
        if (this.alert) {
          this.alert.message = undefined;
        }
      }, 5000);
    });
  }
}
