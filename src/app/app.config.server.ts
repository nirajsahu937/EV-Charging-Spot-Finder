// import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// import { provideServerRendering } from '@angular/platform-server';
// import { appConfig } from './app.config';

// const serverConfig: ApplicationConfig = {
//   providers: [
//     provideServerRendering()
//   ]
// };

// export const config = mergeApplicationConfig(appConfig, serverConfig);

// import { environment } from '../environments/environment';

// export const SERVER_CONFIG = {
//   apiUrl: environment.apiUrl,
//   timeout: 30000, // Example of a timeout setting
// };

// export const config = mergeApplicationConfig(appConfig, serverConfig);
// import { environment } from '../environments/environment';

// export const SERVER_CONFIG = {
//   apiUrl: environment.apiUrl,
//   timeout: 30000, // Example of a timeout setting
// };

export const config = {
  appName: 'MyApp',
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'fr', 'de'],
  currency: 'USD',
  providers: [], // Ensure this line is added as required by `ApplicationConfig`
};
