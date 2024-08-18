// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
  
// })
// export class AppComponent {
//   title = 'demo';
// }


// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.scss'],
// //   // standalone: true,  // Add this line
// // })
// // export class AppComponent {
// //   // Your component logic here
// // }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet for standalone components

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true, // Add this line to mark the component as standalone
  // imports: [RouterOutlet] // Include RouterOutlet for routing
})
export class AppComponent {
  title = 'EV Charging Spot Finder';
}

