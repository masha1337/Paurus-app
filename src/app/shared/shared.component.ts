import { Component } from '@angular/core';
import { LoginService } from '../auth/login/login.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent {

  constructor(private loginService: LoginService,
    private alertService: AlertService,
    private router: Router){}

  logoutUser() {
    this.loginService.logOutUser().then(() => {
      sessionStorage.removeItem('user');
      this.router.navigate(['login']);
    }).catch((error) => {
      this.alertService.displayAlertChange(error.message);
    });
  }
}