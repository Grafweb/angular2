import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//HomeComponent111

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LoginRegisterComponent } from './login/login-register.component';
import { UserToken, Permissions, CanActivateTeam } from './login/shared/can-active.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
    //canActivate: [CanActivateTeam]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
