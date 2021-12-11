/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */

import { Component, Input } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRepositoryResponse } from 'src/app/modal';
import { RepoStatsBoxComponent } from './repo-stats-box.component';

// tslint:disable:component-selector
// tslint:disable:directive-selector
// tslint:disable:max-classes-per-file
@Component({
    selector: 'app-repo-stats-box-item',
    template: '<ng-content></ng-content>',
})
export class TestRepoStatsBoxItemComponent {
    @Input()
    public icon: string;
}
@Component({
    template: '<app-repo-stats-box [repository]="repository"></app-repo-stats-box>',
})
export class TestParentComponent {}

// tslint:enable:component-selector
// tslint:enable:directive-selector
// tslint:enable:max-classes-per-file
describe('modules/routing/repo/repo-stats-box.component', (): void => {
    describe('RepoStatsBoxComponent', (): void => {
        beforeEach(
            waitForAsync((): void => {
                TestBed.configureTestingModule({
                    declarations: [TestRepoStatsBoxItemComponent, RepoStatsBoxComponent, TestParentComponent],
                    imports: [],
                }).compileComponents();
            })
        );

        it('should create the app', (): void => {
            const fixture: ComponentFixture<RepoStatsBoxComponent> = TestBed.createComponent(RepoStatsBoxComponent);
            const app: RepoStatsBoxComponent = fixture.debugElement.componentInstance as RepoStatsBoxComponent;
            expect(app).toBeTruthy();
        });

        describe('layout', (): void => {
            it('needs work');
        });

        describe('methods', (): void => {
            let fixture: ComponentFixture<RepoStatsBoxComponent>;
            let testComponent: RepoStatsBoxComponent;
            beforeEach((): void => {
                fixture = TestBed.createComponent(RepoStatsBoxComponent);
                testComponent = fixture.componentInstance;
            });
            describe('starCount', (): void => {
                describe('getter', (): void => {
                    it('should return 0 if no repository is set', (): void => {
                        testComponent.repository = undefined;
                        expect(testComponent.starCount).toEqual(0);
                    });
                    it('should return 0 if "stargazers_count" property is not set', (): void => {
                        testComponent.repository = {} as UserRepositoryResponse;
                        expect(testComponent.starCount).toEqual(0);
                    });
                    it('should return the stargazers_count property value', (): void => {
                        testComponent.repository = {
                            stargazers_count: 20,
                        } as UserRepositoryResponse;
                        expect(testComponent.starCount).toEqual(20);
                    });
                });
            });
        });
    });
});
