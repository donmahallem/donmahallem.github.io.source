import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RepoDetailComponent } from './repo-detail.component';
import { Component } from '@angular/core';

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
// tslint:enable:component-selector
// tslint:enable:directive-selector
describe('modules/routing/repos/repo-detail.component', () => {
  describe('RepoDetailComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          RepoDetailComponent,
          TestMatDividerComponent,
          TestObjectTreeComponent
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(RepoDetailComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

  });
});
