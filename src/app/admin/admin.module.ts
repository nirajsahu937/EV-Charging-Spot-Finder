// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';

// // import { AdminRoutingModule } from './admin-routing.module';


// // @NgModule({
// //   declarations: [],
// //   imports: [
// //     CommonModule,
// //     AdminRoutingModule
// //   ]
// // })
// // export class AdminModule { }

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// import { AdminRoutingModule } from './admin-routing.module';

// @NgModule({
//   declarations: [AdminDashboardComponent],
//   imports: [
//     CommonModule,
//     AdminRoutingModule
//   ]
// })
// export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AdminModule { }
