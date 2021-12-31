import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { NotificationService } from "src/app/shared/messages/notification.service";
import { LoginService } from "../login/login.service";


@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
    constructor(
        private _loginService: LoginService,
        private _notificationService: NotificationService
    ) { }

    isAuthenticated(path?: string): boolean {
        if (this._loginService.isLoggedIn()) {
            return true
        } else {
            this._notificationService.notify("Efetue o login para seguir :)")
            this._loginService.handleLogin(`${path}`)
        }
        return false        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.isAuthenticated(route.routeConfig?.path)
    }
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.isAuthenticated(route.path)
    }
}