/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { Component, Input } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoListComponent } from './repo-list.component';

// tslint:disable:component-selector
// tslint:disable:directive-selector
// tslint:disable:max-classes-per-file
@Component({
  selector: 'mat-icon',
  template: '',
})
export class TestMatIconComponent { }
@Component({
  selector: 'mat-nav-list',
  template: '',
})
export class TestMatNavListComponent { }
@Component({
  selector: 'mat-divider',
  template: '',
})
export class TestMatDividerComponent { }
@Component({
  selector: 'ng-container',
  template: '',
})
export class TestNgContainerComponent { }
@Component({
  selector: 'a[routerLink]',
  template: '',
})
export class TestRouterLinkComponent {
  @Input()
  public routerLink: string;
}

@Component({
  template: '<app-repo-list></app-repo-list>',
})
export class TestParentComponent {
  public useIcon: string;
  public content: string;
}

// tslint:enable:component-selector
// tslint:enable:directive-selector
// tslint:enable:max-classes-per-file
describe('modules/routing/repos/repos-list.component', (): void => {
  describe('ReposListComponent', (): void => {
    beforeEach(waitForAsync((): void => {
      TestBed.configureTestingModule({
        declarations: [
          TestMatIconComponent,
          RepoListComponent,
          TestParentComponent,
          TestMatNavListComponent,
          TestNgContainerComponent,
          TestMatDividerComponent,
          TestRouterLinkComponent,
        ],
        imports: [
        ],
      }).compileComponents();
    }));

    it('should create the app', (): void => {
      const fixture: ComponentFixture<RepoListComponent> = TestBed.createComponent(RepoListComponent);
      const app: RepoListComponent = fixture.debugElement.componentInstance as RepoListComponent;
      expect(app).toBeTruthy();
    });
  });

});
