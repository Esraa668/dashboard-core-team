import { ApplicationConfig } from '@angular/core';

import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),

    provideRouter(routes),
    provideHttpClient(withFetch()), provideAnimationsAsync(), // Solving Warning ' Enable Fetching ' for better performance
    // provideHttpClient(withInterceptors([customInterceptor])),
  ],
};
