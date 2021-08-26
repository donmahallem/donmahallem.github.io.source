/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { isPlatformBrowser } from '@angular/common';
import { InjectionToken, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { API_TOKEN } from './api-endpoint';
import { CacheService } from './services/cache.service';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServerCacheService } from './services/server-cache.service';
import { UserRepositoryResponse } from './modal';
/*
export function localStorageFactory(platformId: Object) {
  return isPlatformBrowser(platformId) ? localStorage : null; //Don't use null, use a dummy implementation that does not rely on localStorage
}

export const BROWSER_STORAGE = new InjectionToken<ICacheService>('Browser Storage', {
  providedIn: 'root',
});
*/
const itemCache: Map<string, UserRepositoryResponse> = new Map();
export const BROWSER_STORAGE = new InjectionToken<Map<string, UserRepositoryResponse>>('Browser Storage', {
  providedIn: 'root',
  factory: () => itemCache,
});
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppModule,
    ServerModule,
  ],
  providers: [
    {
      provide: API_TOKEN,
      useFactory: (): string => {
        if (process?.env?.API_TOKEN) {
          return process?.env?.API_TOKEN;
        } else {
          return undefined;
        }
      },
    },
    {
      provide: CacheService,
      useClass: ServerCacheService,
      deps: [BROWSER_STORAGE],
    }
  ],
})
export class AppServerModule { }
