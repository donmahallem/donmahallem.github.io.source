/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// tslint:disable-next-line:ordered-imports
/* eslint-disable @typescript-eslint/no-explicit-any,
                  @typescript-eslint/no-unsafe-assignment,
                  @typescript-eslint/no-unsafe-member-access,
                  @typescript-eslint/no-unsafe-call
*/
import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import {
  platformBrowserDynamicTesting,
  BrowserDynamicTestingModule,
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(), {
  teardown: { destroyAfterEach: false }
},
);
// Then we find all the tests.
const context: any = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
