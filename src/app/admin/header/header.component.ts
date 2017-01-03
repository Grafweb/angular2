import { Component, OnInit } from '@angular/core';
import { Profile, LoginService }  from './../../login/shared/login.service';

@Component({
    selector: 'header-admin',
    templateUrl: 'src/app/admin/header/header.component.html',
    providers: []
})
export class HeaderAdminComponent implements OnInit  {

  constructor (  private LoginService: LoginService) {
  }

  profile: Profile = this.LoginService.getProfile();

  getProfile() {
      return this.profile = this.LoginService.getProfile();
  }

  ngOnInit(): void {
      console.info("ngOnInit()");
  }

} 