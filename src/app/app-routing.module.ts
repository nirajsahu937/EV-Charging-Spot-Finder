// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // import { HomeComponent } from './home/home.component';

// // const routes: Routes = [
// //   { path: '', component: HomeComponent },
// //   { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
// //   { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
// //   { path: '', loadChildren: () => import('./charging-spot/charging-spot.module').then(m => m.ChargingSpotModule) }
// // ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
// //   exports: [RouterModule]
// // })
// // export class AppRoutingModule { }

// // app-routing.module.ts
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
//   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
//   { path: 'charging-spot', loadChildren: () => import('./charging-spot/charging-spot.module').then(m => m.ChargingSpotModule) }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ChargingSpotListComponent } from './charging-spot/charging-spot-list/charging-spot-list.component';
import { ChargingSpotRegisterComponent } from './charging-spot/charging-spot-register/charging-spot-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/spots', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'spots', component: ChargingSpotListComponent },
  { path: 'register-spot', component: ChargingSpotRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
