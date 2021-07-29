/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import 'zone.js/node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join, resolve } from 'path';

import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { API_TOKEN } from 'src/app/api-endpoint';
import { AppServerModule } from './src/main.server';

// tslint:disable:typedef
// The Express app is exported so that it can be used by serverless Functions.
export const app: any = (): express.Express => {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/DonMahallem/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [{
      provide: API_TOKEN, useFactory: (): string => {
        console.log('SSR');
        return 'localhost:4200/api';
      },
    }],
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('/api/repos/:user/:repo', (req, res, next) => {
    const dataPath: string = resolve(join('./', 'dist', 'data', 'repos', req.params.user, req.params.repo));
    if (existsSync(dataPath)) {
      res.set('Content-Type', 'application/json');
      res.sendFile(dataPath);
    } else {
      next();
    }
  });
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y',
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      providers: [{
        provide: APP_BASE_HREF, useValue: req.baseUrl,
      }, {
        provide: API_TOKEN,
        useFactory: (): string => {
          return 'localhost:4200/api';
        },
      }],
      req,
    });
  });

  return server;
};

const run: any = (): void => {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
};

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
