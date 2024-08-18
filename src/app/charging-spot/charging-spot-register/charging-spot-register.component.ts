// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-charging-spot-detail',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './charging-spot-detail.component.html',
// //   styleUrl: './charging-spot-detail.component.scss'
// // })
// // export class ChargingSpotDetailComponent {

// // }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ChargingSpotService } from '../charging-spot.service';
// import { ChargingSpot } from '../charging-spot.model';

// @Component({
//   selector: 'app-charging-spot-detail',
//   templateUrl: './charging-spot-detail.component.html',
//   styleUrls: ['./charging-spot-detail.component.scss']
// })
// export class ChargingSpotDetailComponent implements OnInit {
//   chargingSpot: ChargingSpot | undefined;

//   constructor(
//     private route: ActivatedRoute,
//     private chargingSpotService: ChargingSpotService
//   ) { }

//   ngOnInit(): void {
//     const id = +this.route.snapshot.paramMap.get('id')!;
//     this.chargingSpotService.getChargingSpotById(id).subscribe(data => {
//       this.chargingSpot = data;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ChargingSpotService } from '../../shared/services/charging-spot.service';
import { ChargingSpot } from '../../shared/models/charging-spot.model';

@Component({
  selector: 'app-charging-spot-register',
  templateUrl: './charging-spot-register.component.html',
  styleUrls: ['./charging-spot-register.component.scss']
})
export class ChargingSpotRegisterComponent implements OnInit {
  chargingSpot: ChargingSpot = new ChargingSpot();

  constructor(private chargingSpotService: ChargingSpotService) { }

  ngOnInit(): void {}

  registerChargingSpot(): void {
    this.chargingSpotService.registerChargingSpot(this.chargingSpot).subscribe(() => {
      console.log('Charging Spot registered successfully');
    });
  }
}

