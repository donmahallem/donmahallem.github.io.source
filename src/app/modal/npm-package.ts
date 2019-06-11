export interface NpmPackage {
    dependencies: { [key: string]: string };
    devDependencies: { [key: string]: string };
    optionalDependencies: { [key: string]: string };
}
