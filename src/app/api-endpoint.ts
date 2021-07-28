import { InjectionToken } from "@angular/core";

export const API_ENDPOINT: InjectionToken<string> = new InjectionToken<string>('api_endpoint', {
    providedIn: 'platform',
    factory: (): string => {
        return 'https://api.github.com'
    },
});
