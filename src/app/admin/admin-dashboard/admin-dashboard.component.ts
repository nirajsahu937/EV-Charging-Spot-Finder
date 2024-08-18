// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-admin-dashboard',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './admin-dashboard.component.html',
// //   styleUrl: './admin-dashboard.component.scss'
// // })
// // export class AdminDashboardComponent {

// // }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin-dashboard',
//   templateUrl: './admin-dashboard.component.html',
//   styleUrls: ['./admin-dashboard.component.scss']
// })
// export class AdminDashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ChargingSpotService } from '../../shared/services/charging-spot.service';
import { ChargingSpot } from '../../shared/models/charging-spot.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  chargingSpots: ChargingSpot[] = [];

  constructor(private chargingSpotService: ChargingSpotService) { }

  ngOnInit(): void {
    this.loadChargingSpots();
  }

  loadChargingSpots(): void {
    this.chargingSpotService.getChargingSpots().subscribe((data: ChargingSpot[]) => {
      this.chargingSpots = data;
    });
  }

  deleteChargingSpot(id: number): void {
    this.chargingSpotService.deleteChargingSpot(id).subscribe(() => {
      this.loadChargingSpots();
    });
  }
}
