// // import { bootstrapApplication } from '@angular/platform-browser';
// // import { APP_CONFIG } from './app/app.config';
// // import { AppComponent } from './app/app.component';

// // bootstrapApplication(AppComponent, APP_CONFIG)
// //   .catch((err) => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { provideRouter, Router } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
// import { routes } from './app-routing.module'; // Adjust this if necessary

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient()
//   ]
// })
// .catch(err => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
