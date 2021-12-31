import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "src/app/security/login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _loginService: LoginService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._loginService.isLoggedIn()) {
            let userData = this._loginService.user
            const changedRequest = req.clone({ 
                setHeaders: { 
                    "Authorization": `Bearer ${userData.accessToken}` 
                } 
            })
            console.log(req);
            console.log(changedRequest);
            return next.handle(changedRequest)
        }

        console.log(req);
        return next.handle(req)
    }
}