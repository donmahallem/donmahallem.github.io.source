/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', (): void => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err: any): void => console.error(err));
});
