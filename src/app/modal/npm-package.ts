/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


export interface INpmPackage {
    dependencies: { [key: string]: string };
    devDependencies: { [key: string]: string };
    optionalDependencies: { [key: string]: string };
}
