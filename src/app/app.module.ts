/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { AuthInterceptor, GithubApiService } from './services';
import { BrowserCacheService } from './services/browser-cache.service';
import { CacheService } from './services/cache.service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HomeComponent, NotFoundComponent],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        MatToolbarModule,
    ],
    providers: [
        GithubApiService,
        {
            multi: true,
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
        },
        {
            provide: CacheService,
            useClass: BrowserCacheService,
        },
    ],
})
export class AppModule {}
