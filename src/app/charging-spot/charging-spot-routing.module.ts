// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';

// // const routes: Routes = [];

// // @NgModule({
// //   imports: [RouterModule.forChild(routes)],
// //   exports: [RouterModule]
// // })
// // export class ChargingSpotRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargingSpotListComponent } from './charging-spot-list/charging-spot-list.component';
import { ChargingSpotRegisterComponent } from './charging-spot-register/charging-spot-register.component';
// import { AddChargingSpotComponent } from './add-charging-spot/add-charging-spot.component';

const routes: Routes = [
  { path: 'charging-spots', component: ChargingSpotListComponent },
  { path: 'charging-spots/:id', component: ChargingSpotRegisterComponent },
  // { path: 'add-charging-spot', component: AddChargingSpotComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargingSpotRoutingModule { }
