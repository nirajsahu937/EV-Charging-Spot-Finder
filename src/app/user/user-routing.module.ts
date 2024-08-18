// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';

// // const routes: Routes = [];

// // @NgModule({
// //   imports: [RouterModule.forChild(routes)],
// //   exports: [RouterModule]
// // })
// // export class UserRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }



