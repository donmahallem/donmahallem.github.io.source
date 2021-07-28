/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { InjectionToken } from '@angular/core';

export const API_ENDPOINT: InjectionToken<string> = new InjectionToken<string>('api_endpoint', {
    factory: (): string => {
        return 'https://api.github.com';
    },
    providedIn: 'platform',
});
