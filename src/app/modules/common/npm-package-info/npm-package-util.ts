/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */


export class NpmPackageUtil {

    public derangeVersion(version: string): string {
        const split: RegExpMatchArray = version.match(/[0-9].*/);
        return split ? split[0] : version;
    }

}
