/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Endpoints } from '@octokit/types';
export * from './github-file-id';
export * from './npm-package';

export type UserRepositoriesResponse = Endpoints['GET /users/{username}/repos']['response']['data'];
export type UserRepositoryResponse = Endpoints['GET /users/{username}/repos']['response']['data'][0];
