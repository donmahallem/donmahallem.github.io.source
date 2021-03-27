import { TestBed, async, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { Component, Input, DebugElement } from '@angular/core';
import { Repository } from 'src/app/modal';
import { By } from '@angular/platform-browser';
import { RepoListComponent } from './repo-list.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

// tslint:disable:component-selector
// tslint:disable:directive-selector
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
describe('modules/routing/repos/repos-list.component', () => {
  describe('ReposListComponent', () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
        ],
        declarations: [
          TestMatIconComponent,
          RepoListComponent,
          TestParentComponent,
          TestMatNavListComponent,
          TestNgContainerComponent,
          TestMatDividerComponent,
          TestRouterLinkComponent
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(RepoListComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  });

});
