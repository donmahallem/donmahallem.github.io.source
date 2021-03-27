import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinct, mergeMap } from 'rxjs/operators';
import { NpmPackage } from '../../../modal';
import { FileDownloadService } from 'src/app/services/file-download.service';

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

    public observePackage(): Observable<NpmPackage> {
        return this.packageSubject
            .pipe(
                distinct(),
                mergeMap((file: string): Observable<NpmPackage> => {
                    return this.downloadService.getRawFile<NpmPackage>(file);
                })
            );
    }
}
