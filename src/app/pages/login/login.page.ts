import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  isLoginError = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
    emailAddress: ['',  Validators.required],
    password:['',  Validators.required]
  })

  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }

}
