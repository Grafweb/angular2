import { Injectable }  from '@angular/core';
import { CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
// import {Http, Response, Headers, RequestOptions, Request, RequestMethod} from '@angular/http';
// // import { Headers } from '@angular/http';
// // import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';
// import { HeadersRequestOptions }  from './headers-default';
//import { UserToken }  from './user-token';
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
  constructor( private loginService: LoginService,  private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    this.loginService.isLoggedin();

  //  let url: string = state.url;
  //  let headers = new Headers();
  // console.info("headers.get" + headers.get('x-auth'));
  
  //if(this.permissions.canActivate(this.currentUser.token)) {

  //}
 //  let url: string = state.url;


    return true;
  }
}