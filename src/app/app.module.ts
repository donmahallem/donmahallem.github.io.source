/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, PLATFORM_ID } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { firstValueFrom } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserRepositoriesResponse } from './modal';
import { NotFoundComponent } from './not-found.component';
import { AuthInterceptor, GithubApiService } from './services';
import { BrowserCacheService } from './services/browser-cache.service';
import { CacheService } from './services/cache.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatToolbarModule,
  ],
  providers: [
    GithubApiService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: CacheService,
      useClass: BrowserCacheService,
    },
    {
      provide: APP_INITIALIZER, useFactory: (kk: GithubApiService, platformId: any): () => Promise<void> => {
        console.log(isPlatformServer(platformId));
        return async (): Promise<void> => {
          for (let i = 0; i < 20; i++) {
            console.log('KK', i);
            const items: UserRepositoriesResponse = await firstValueFrom(kk.getUserRepos('donmahallem', 25, i));
            if (items.length < 25) {
              break;
            }
          }
        }
      }, deps: [GithubApiService, PLATFORM_ID], multi: true
    }
  ],
})
export class AppModule { }
