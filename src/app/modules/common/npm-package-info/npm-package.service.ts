/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinct, mergeMap } from 'rxjs/operators';
import { FileDownloadService } from 'src/app/services/file-download.service';
import { INpmPackage } from '../../../modal';

@Injectable()
export class NpmPackageService {

    private packageSubject: BehaviorSubject<string> = new BehaviorSubject(undefined);
    public constructor(private downloadService: FileDownloadService) {

    }

    public set package(file: string) {
        this.packageSubject.next(file);
    }

    public get package(): string {
        return this.packageSubject.value;
    }

    public observePackage(): Observable<INpmPackage> {
        return this.packageSubject
            .pipe(
                distinct(),
                mergeMap((file: string): Observable<INpmPackage> => {
                    return this.downloadService.getRawFile<INpmPackage>(file);
                }),
            );
    }
}
