// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';

// // import { ChargingSpotRoutingModule } from './charging-spot-routing.module';


// // @NgModule({
// //   declarations: [],
// //   imports: [
// //     CommonModule,
// //     ChargingSpotRoutingModule
// //   ]
// // })
// // export class ChargingSpotModule { }


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ChargingSpotListComponent } from './charging-spot-list/charging-spot-list.component';
// import { ChargingSpotDetailComponent } from './charging-spot-register/charging-spot-register.component';
// // import { AddChargingSpotComponent } from './add-charging-spot/add-charging-spot.component';
// import { ChargingSpotRoutingModule } from './charging-spot-routing.module';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     ChargingSpotListComponent,
//     ChargingSpotDetailComponent
//     // AddChargingSpotComponent
//   ],
//   imports: [
//     CommonModule,
//     ChargingSpotRoutingModule,
//     FormsModule
//   ]
// })
// export class ChargingSpotModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargingSpotListComponent } from './charging-spot-list/charging-spot-list.component';
import { ChargingSpotRegisterComponent } from './charging-spot-register/charging-spot-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ChargingSpotListComponent,
    ChargingSpotRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ChargingSpotModule { }
