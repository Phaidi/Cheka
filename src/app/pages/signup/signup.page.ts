import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { passwordMatchValidator } from '../../validation/passwordMatchValidator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  signupForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]],
    confirmPassword: ['',  Validators.required]
  }, {validator: passwordMatchValidator}) 

  get firstname() { return this.signupForm.get('firstname')}

  get lastname() { return this.signupForm.get('lastname')}

  get emailAddress() { return this.signupForm.get('emailAddress')}

  get phoneNumber() { return this.signupForm.get(' phoneNumber')}

  get password() { return this.signupForm.get('password')}

  get confirmPassword() { return this.signupForm.get('confirmPassword')}

  onSubmit(){
    console.log(this.signupForm.value);
    this.router.navigate(['/dashboard']);
  }

}
