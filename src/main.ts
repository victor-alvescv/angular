import { bootstrapApplication } from '@angular/platform-browser';
/* bootstrapApplication: Used to bootstrap your Angular application. It sets up the Angular environment and loads the root component(AppComponent) into the designated HTML element in your...
 index.html; */
import { appConfig } from './app/app.config'; // Contains configuration settings for the application;
import { AppComponent } from './app/app.component'; // Imports the root component of the application, which serves as the entry point of the UI;

bootstrapApplication(AppComponent, appConfig).catch(
  // AppComponent -> Specifies the root component that Angular will use as the starting point of the app. This component is rendered into the HTML element defined in your index.html;
  // appConfig -> Provides configuration options;
  (err) => console.error(err) // Error Handling
);

// Responsible for initializing and bootstrapping your Angular application;
