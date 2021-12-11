/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { InjectionToken } from '@angular/core';

export const API_TOKEN: InjectionToken<string> = new InjectionToken<string>('api_endpoint', {
    factory: (): string => {
        return undefined;
    },
    providedIn: 'root',
});
