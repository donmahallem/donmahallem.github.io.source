/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Component, Input } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IRepository } from 'src/app/modal';
import { RepoDetailComponent } from './repo-detail.component';

// tslint:disable:component-selector
// tslint:disable:directive-selector
// tslint:disable:max-classes-per-file
@Component({
  selector: 'mat-divider',
  template: '',
})
export class TestMatDividerComponent { }
@Component({
  selector: 'app-object-tree',
  template: '',
})
export class TestObjectTreeComponent { }
@Component({
  selector: 'app-npm-package-info',
  template: '',
})
export class TestNpmPackageInfoComponent {
  @Input()
  public packageUrl: string;
}
@Component({
  selector: 'app-repo-stats-box',
  template: '',
})
export class TestAppRepoStatsBoxComponent {
  @Input()
  public repository: IRepository;
}
// tslint:enable:component-selector
// tslint:enable:directive-selector
// tslint:enable:max-classes-per-file
describe('modules/routing/repo/repo-detail.component', (): void => {
  describe('RepoDetailComponent', (): void => {
    beforeEach(waitForAsync((): void => {
      TestBed.configureTestingModule({
        declarations: [
          RepoDetailComponent,
          TestMatDividerComponent,
          TestObjectTreeComponent,
          TestNpmPackageInfoComponent,
          TestAppRepoStatsBoxComponent,
        ],
        imports: [
          RouterTestingModule,
        ],
      }).compileComponents();
    }));

    it('should create the app', (): void => {
      const fixture: ComponentFixture<RepoDetailComponent> = TestBed.createComponent(RepoDetailComponent);
      const app: RepoDetailComponent = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    describe('layout', (): void => {
      it('requires implementation');
    });

    describe('methods', (): void => {
      let fixture: ComponentFixture<RepoDetailComponent>;
      let app: RepoDetailComponent;
      beforeEach((): void => {
        fixture = TestBed.createComponent(RepoDetailComponent);
        app = fixture.debugElement.componentInstance;
      });
      describe('hasDescription()', (): void => {
        it('should return false if no repository is set', (): void => {
          expect(app.hasDescription()).toBeFalse();
        });
        it('should return true if a description is set', (): void => {
          app.repository = { description: 'test description' } as any;
          expect(app.hasDescription()).toBeTrue();
        });
      });
      it('requires implementation');
    });

  });
});
