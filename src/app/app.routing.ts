import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule,  CanActivate } from '@angular/router';
//HomeComponent111

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PageAddAdminComponent } from './admin/page/page-add.component';
import { PageListAdminComponent } from './admin/page/page-list.component';
import { LoginRegisterComponent } from './login/login-register.component';
import { CanActivateTeam } from './login/shared/can-active.service';

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
    component: AdminComponent,
    canActivate: [CanActivateTeam]
  },
  {
    path: 'admin/page/add-page',
    component: PageAddAdminComponent,
    canActivate: [CanActivateTeam]
  },
  {
    path: 'admin/page/list-page',
    component: PageAddAdminComponent,
    canActivate: [CanActivateTeam]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
