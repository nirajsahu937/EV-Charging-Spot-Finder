// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';

// // import { UserRoutingModule } from './user-routing.module';


// // @NgModule({
// //   declarations: [],
// //   imports: [
// //     CommonModule,
// //     UserRoutingModule
// //   ]
// // })
// // export class UserModule { }


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { UserLoginComponent } from './user-login/user-login.component';
// import { UserRegisterComponent } from './user-register/user-register.component';
// import { UserRoutingModule } from './user-routing.module';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     UserLoginComponent,
//     UserRegisterComponent
//   ],
//   imports: [
//     CommonModule,
//     UserRoutingModule,
//     FormsModule
//   ]
// })
// export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule
  ]
})
export class UserModule { }
