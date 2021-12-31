import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  navigateTo!: string

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _notificationService: NotificationService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: this._formBuilder.control('', [Validators.required, Validators.email]),
      passwd: this._formBuilder.control('', [Validators.required])
    })
    this.navigateTo = this._activatedRoute.snapshot.params['to'] || btoa('/')
  }

  login() {
    this._loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.passwd
    ).subscribe({
      next: (resUser) => this._notificationService.notify(`Olá ${resUser.name}.`),
      error: (resErrorResponse) => this._notificationService.notify(resErrorResponse.error.message),
      complete: () => this._router.navigate([atob(this.navigateTo)])
    })
    
  }

}
