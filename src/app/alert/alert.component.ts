import {Component, OnInit} from '@angular/core';
import {AlertService} from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    message: string;
    clearMessage: any;

    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.alertService.displayAlert.subscribe(error => {
            this.message = error;
            clearTimeout(this.clearMessage);
            this.clearMessage = setTimeout(() => {
                this.message = undefined;
              }, 6000);
        }) 
    }
}