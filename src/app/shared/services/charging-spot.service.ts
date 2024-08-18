// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { ChargingSpot } from '../models/charging-spot.model';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class ChargingSpotService {
// //   private apiUrl = 'http://localhost:8080/api/charging-spots';

// //   constructor(private http: HttpClient) { }

// //   getChargingSpots(): Observable<ChargingSpot[]> {
// //     return this.http.get<ChargingSpot[]>(this.apiUrl);
// //   }

// //   deleteChargingSpot(id: number): Observable<void> {
// //     return this.http.delete<void>(`${this.apiUrl}/${id}`);
// //   }
// // }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ChargingSpot } from '../models/charging-spot.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChargingSpotService {
//   private apiUrl = 'http://localhost:8080/api/charging-spots';

//   constructor(private http: HttpClient) { }

//   getChargingSpots(): Observable<ChargingSpot[]> {
//     return this.http.get<ChargingSpot[]>(this.apiUrl);
//   }

//   registerChargingSpot(chargingSpot: ChargingSpot): Observable<ChargingSpot> {
//     return this.http.post<ChargingSpot>(this.apiUrl, chargingSpot);
//   }

//   deleteChargingSpot(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChargingSpot } from '../models/charging-spot.model';

@Injectable({
  providedIn: 'root'
})
export class ChargingSpotService {
  private apiUrl = 'http://localhost:8080/api/charging-spots';

  constructor(private http: HttpClient) { }

  getChargingSpots(): Observable<ChargingSpot[]> {
    return this.http.get<ChargingSpot[]>(this.apiUrl);
  }

  registerChargingSpot(chargingSpot: ChargingSpot): Observable<ChargingSpot> {
    return this.http.post<ChargingSpot>(this.apiUrl, chargingSpot);
  }

  deleteChargingSpot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
