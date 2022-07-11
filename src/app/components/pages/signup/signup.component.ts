import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { ErrorCommunicator } from '../../services/error-communicator';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector:"app-signup",
  templateUrl:"./signup.component.html",
  styleUrls:["./signup.component.css"]
})
export class SignupComponent implements OnInit, OnDestroy {
  showErrorBox: boolean = false;
  errorBoxMessage: string = "Erreur inconnue"
  private errorSubs: Subscription;

  showGreenBanner: boolean = false;

  constructor(private usersService: UsersService,
    private errorCommunicator: ErrorCommunicator) {}

  ngOnInit() {
    this.showErrorBox = false;
    this.errorSubs = this.errorCommunicator.getErrorBoxListener()
      .subscribe(errorMessage => {
        this.displayErrorBox(errorMessage);

      })
  }

  onSignup(signupForm: NgForm) {
    //sign up user
    this.usersService.postUser(signupForm.value.name, signupForm.value.email, signupForm.value.password, signupForm.value.matricule);
    console.log(signupForm.value);
  }

  private displayErrorBox(message: string) {
    this.errorBoxMessage = message;
    this.showErrorBox = true;
  }

  ngOnDestroy() {
    this.errorSubs.unsubscribe();
  }


  


}
