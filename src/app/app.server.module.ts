/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { API_TOKEN } from './api-endpoint';

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
      provide: API_TOKEN,
      useFactory: (): string => {
        if (process?.env?.API_TOKEN) {
          return process?.env?.API_TOKEN;
        } else {
          return undefined;
        }
      },
    },
  ],
})
export class AppServerModule { }
