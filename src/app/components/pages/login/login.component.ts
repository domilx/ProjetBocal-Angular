import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { ErrorCommunicator } from '../../services/error-communicator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showErrorBox: boolean = false;
  errorBoxMessage: string = "Unkown Error";
  private errorSubs: Subscription;

  error: any;

  constructor(private usersService: UsersService,
    private errorCommunicator: ErrorCommunicator) {}

  ngOnInit(): void {
    this.showErrorBox = false;
    this.errorSubs = this.errorCommunicator.getErrorBoxListener()
      .subscribe(errorMessage => {
        this.displayErrorBox(errorMessage);
      })
  }

  onLogin(loginForm: NgForm) {
    if(loginForm.invalid) {
      // this.showErrorBox = false;
      return;
    }
    const lowercaseEmail = loginForm.value.email.toLowerCase();
    const password = loginForm.value.password;
    this.usersService.loginUser(lowercaseEmail, password, (err: any) => {
      this.error = err;
    });
  }

  private displayErrorBox(message: string) {
    this.errorBoxMessage = message;
    this.showErrorBox = true;
  }

}
