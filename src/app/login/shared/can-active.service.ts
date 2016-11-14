import { ModuleWithProviders, Injectable, Inject }  from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserToken }  from './user-token';


export class Permissions {

  canActivate(user: UserToken): boolean {
    console.info("user" + user);

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

   let url: string = state.url;
   let headers = new Headers();
  console.info("headers.get" + headers.get('x-auth'));

 //  let url: string = state.url;


    return this.permissions.canActivate(UserToken.token);
  }
}