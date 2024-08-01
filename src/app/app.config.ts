import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// ApplicationConfig: A type that represents the configuration object for the Angular application. It specifies how the application should be configured;
// provideZoneChangeDetection: A function that configures change detection behavior in Angular;
import { provideRouter } from '@angular/router';
// provideRouter: A function that sets up routing for the application. It configures the router with the routes defined in app.routes.ts;

import { routes } from './app.routes'; // Imports the routing configuration, which contains the route definitions for the application;

export const appConfig: ApplicationConfig = {
  // The appConfig object configures various aspects of the Angular application. It is passed to the bootstrapApplication function to set up the application;
  // ApplicationConfig is used to type the configuration object. This ensures that the object adheres to the expected structure for Angular's application configuration;
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideZoneChangeDetection: Configures change detection in Angular;
    // eventCoalescing: true: Enables event coalescing, which reduces the number of change detection cycles triggered by events;
    provideRouter(routes),
    // provideRouter: Sets up the Angular Router with the provided routes;
    // routes: An imported constant from app.routes.ts that defines the application's routing configuration;
  ],
};

// n:44 -> Inside the providers array, in the app config, we can add MyFirstService(IMPORT ASWELL), and it will work again;

// Provides application-wide configuration settings;
