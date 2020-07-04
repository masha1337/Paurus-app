import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;

    constructor(private fb: FormBuilder,
      private router: Router,
      private alertService: AlertService,
      private loginService: LoginService) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
          email: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required]],
          password: ['', [Validators.required, Validators.minLength(6)]]
        });
      }

      login() {
        this.loading = true;
        this.loginService.loginUser(this.loginForm.value).then((result) => {
          this.loading = false;
          sessionStorage.setItem('user', JSON.stringify(result.user));
          this.router.navigate(['overview']);
          this.autoLogOut();
        }).catch((error) => {
          this.alertService.displayAlertChange(error.message);
          this.loading = false;
        });
      }

      autoLogOut() {
        setTimeout(() => {
          this.loginService.logOutUser().then(() => {
            sessionStorage.removeItem('user');
            this.router.navigate(['login']);
          }).catch((error) => {
            this.alertService.displayAlertChange(error.message);
          });
        }, 120000);
      }
}