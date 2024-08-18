// import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
// import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
// import { FormsModule } from '@angular/forms';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient } from '@angular/common/http';

// registerLocaleData(en);

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideNzI18n(en_US), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient()]
// };

// app.config.ts

// Define the custom interface that includes all your configuration properties
export interface AppConfig {
  appName: string;
  defaultLanguage: string;
  supportedLanguages: string[];
  currency: string;
  providers: any[]; // Adjust the type as needed for your providers
}

// Create the actual configuration object using your custom interface
export const APP_CONFIG: AppConfig = {
  appName: 'MyApp',
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'fr', 'de'],
  currency: 'USD',
  providers: [] // You can add specific providers here if necessary
};


  
  