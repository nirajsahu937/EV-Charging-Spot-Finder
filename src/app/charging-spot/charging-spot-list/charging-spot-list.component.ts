// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-charging-spot-list',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './charging-spot-list.component.html',
// //   styleUrl: './charging-spot-list.component.scss'
// // })
// // export class ChargingSpotListComponent {

// // }

// import { Component, OnInit } from '@angular/core';
// import { ChargingSpotService } from '../charging-spot.service';
// import { ChargingSpot } from '../charging-spot.model';

// @Component({
//   selector: 'app-charging-spot-list',
//   templateUrl: './charging-spot-list.component.html',
//   styleUrls: ['./charging-spot-list.component.scss']
// })
// export class ChargingSpotListComponent implements OnInit {
//   chargingSpots: ChargingSpot[] = [];

//   constructor(private chargingSpotService: ChargingSpotService) { }

//   ngOnInit(): void {
//     this.chargingSpotService.getChargingSpots().subscribe(data => {
//       this.chargingSpots = data;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ChargingSpotService } from '../../shared/services/charging-spot.service';
import { ChargingSpot } from '../../shared/models/charging-spot.model';

@Component({
  selector: 'app-charging-spot-list',
  templateUrl: './charging-spot-list.component.html',
  styleUrls: ['./charging-spot-list.component.scss']
})
export class ChargingSpotListComponent implements OnInit {
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
}

