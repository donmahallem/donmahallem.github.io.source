/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { API_ENDPOINT } from './api-endpoint';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    {
      provide: API_ENDPOINT,
      useFactory: (): string => {
        return 'http://localhost:4200/api';
      },
    },
  ]
})
export class AppServerModule { }
