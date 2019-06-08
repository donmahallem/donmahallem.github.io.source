import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GithubApiService } from '../../../services';
import { distinct } from 'rxjs/operators';
import { flatMap } from 'tslint/lib/utils';
import { GithubFileId } from '../../../modal';

@Injectable()
export class NpmPackageService {

    private packageSubject: BehaviorSubject<GithubFileId> = new BehaviorSubject(undefined);
    public constructor(private githubApi: GithubApiService) {

    }

    public set package(file: GithubFileId) {
        this.packageSubject.next(file);
    }

    public get package(): GithubFileId {
        return this.packageSubject.value;
    }

    public observePackage(): Observable<any> {
        return this.packageSubject
            .pipe(
                distinct(),
                flatMap((file: GithubFileId): any => {
                    return this.githubApi.getRawFile(file);
                })
            );
    }
}
