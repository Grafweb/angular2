import { ModuleWithProviders, Injectable, Inject }  from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { UserToken }  from './user-token';
import { LoginService }  from './login.service';


// export class Permissions {

//   canActivate(user: UserToken): boolean {
//     if(user) { 
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
@Injectable() 
export class CanActivateTeam implements CanActivate {
  constructor( private loginService: LoginService,  private router: Routes) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

  //  let url: string = state.url;
  //  let headers = new Headers();
  // console.info("headers.get" + headers.get('x-auth'));
  
  //if(this.permissions.canActivate(this.currentUser.token)) {

  //}
 //  let url: string = state.url;


    return true;
  }
}