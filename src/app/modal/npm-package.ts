/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */

export interface INpmPackage {
    dependencies: { [key: string]: string };
    devDependencies: { [key: string]: string };
    optionalDependencies: { [key: string]: string };
}
