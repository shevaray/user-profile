import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})
export class AuthenticationPageComponent implements OnInit {

  img='assets/signPng.png'
  authForm!: FormGroup;
  isLoginMode = true;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    private notify: NotificationService,
  ) {
    this.authForm = fb.group({
      email:[null, [Validators.email]],
      password:[null, [Validators.required]],
      remember: [false],
    })
  }

  onSubmit(){
    if(!this.authForm.valid){
      this.loading = false;
      return;
    }
    this.loading = true;

    const email = this.authForm.value.email
    const password = this.authForm.value.password
    let authObs;

    if(!this.isLoginMode){
      authObs = this.authservice.signup(email, password)
      .subscribe(
        res =>{
          console.log(res);
          this.loading = false;
          this.authForm.reset();
        },
        error =>{
          let err = error?.error?.error?.message;
          this.notify.error("", err)
          this.loading = false;
        }
      )
    }else{
      authObs = this.authservice
      .signIn(email, password)
      .subscribe(
        (res:any) =>{
          localStorage.setItem('token', res?.idToken)
          localStorage.setItem('user-email', res?.email)
          this.router.navigate(['/users'])
          console.log(res);
          this.loading = false


        },
        (error:any)=>{
          let err = error?.error?.error?.message;
          this.notify.error("", err)
          this.loading = false
        }
      )
    }

  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {
  }

}
