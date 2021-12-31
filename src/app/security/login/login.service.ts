import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable, tap } from 'rxjs';
import { MEAT_API } from 'src/app/app.api';
import { IAuthUser } from './user.interface';
import { NavigationEnd, Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class LoginService {
    _navigationEnd!: NavigationEnd
    user!: any

    constructor(
        private _httpClient: HttpClient,
        private _router: Router
    ) {
        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(
            (navEnd: any) => {
                this._navigationEnd = navEnd
            }
        )
    }



    /**
     * login
     */
    public login(email: string, passwd: string): Observable<any> {
        const url = `${MEAT_API}/login`
        const body = {
            email: email,
            passwd: passwd
        }
        return this._httpClient.post<IAuthUser>(url, body)
            .pipe(
                tap(resUser => this.user = resUser)
            )
    }

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    handleLogin(path: string = this._navigationEnd.urlAfterRedirects) {
        this._router.navigate(['/login', btoa(path)])
    }

    handleLogOut(path?: string) {
        this.user = undefined
    }
}