/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */

import { HttpClient } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { API_TOKEN } from './api-endpoint';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { OfflineDatabase } from './offline-database';
import { GithubApiService } from './services';
import { CacheService } from './services/cache.service';
import { OfflineGithubApiService } from './services/offline-github-api.service';
import { ServerCacheService } from './services/server-cache.service';

const offlineDB: OfflineDatabase = new OfflineDatabase();
export const SERVER_CACHE_STORAGE: InjectionToken<OfflineDatabase> = new InjectionToken<OfflineDatabase>('ServerCacheStorage', {
    factory: (): OfflineDatabase => offlineDB,
    providedIn: 'root',
});
@NgModule({
    bootstrap: [AppComponent],
    imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppModule, ServerModule],
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
            provide: SERVER_CACHE_STORAGE,
            useFactory: (): OfflineDatabase => offlineDB,
        },
        {
            deps: [SERVER_CACHE_STORAGE],
            provide: CacheService,
            useClass: ServerCacheService,
        },
        {
            deps: [HttpClient, CacheService],
            provide: GithubApiService,
            useClass: OfflineGithubApiService,
        },
    ],
})
export class AppServerModule {}
