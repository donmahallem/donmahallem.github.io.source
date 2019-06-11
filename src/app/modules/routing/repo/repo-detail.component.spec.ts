import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RepoDetailComponent } from './repo-detail.component';
import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/modal';

// tslint:disable:component-selector
// tslint:disable:directive-selector
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
  public repository: Repository;
}
// tslint:enable:component-selector
// tslint:enable:directive-selector
describe('modules/routing/repo/repo-detail.component', () => {
  describe('RepoDetailComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          RepoDetailComponent,
          TestMatDividerComponent,
          TestObjectTreeComponent,
          TestNpmPackageInfoComponent,
          TestAppRepoStatsBoxComponent
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(RepoDetailComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    describe('layout', () => {
      it('requires implementation');
    });

    describe('methods', () => {
      it('requires implementation');
    });

  });
});
