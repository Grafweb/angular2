import { ModuleWithProviders, Injectable, Inject }  from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserToken }  from './user-token';


export class Permissions {

  canActivate(user: UserToken, id: string): boolean {
    return true;
  }
}
@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return this.permissions.canActivate(this.currentUser, "15");
  }
}