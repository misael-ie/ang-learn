import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/security/login/login.service';
import { IAuthUser } from 'src/app/security/login/user.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private _loginService: LoginService
  ) { }

  ngOnInit() {
  }

  user(): IAuthUser {
    return this._loginService.user
  }

  //TODO: é possível simplificar ou é necessário manter a estratégia de repasse (código duplicado)?
  isLoggedIn(): boolean {
    return this._loginService.isLoggedIn()
  }

  logIn(){
    this._loginService.handleLogin()
  }

  logOut(){
    this._loginService.handleLogOut()
  }
}
