import { TestBed, async } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/modal';
import { RepoStatsBoxItemComponent } from './repo-stats-box-item.component';

// tslint:disable:component-selector
// tslint:disable:directive-selector
@Component({
  selector: 'mat-icon',
  template: '',
})
export class TestMatIconComponent { }

// tslint:enable:component-selector
// tslint:enable:directive-selector
describe('modules/routing/repo/repo-stats-box-item.component', () => {
  describe('RepoStatsBoxItemComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
        ],
        declarations: [
          TestMatIconComponent,
          RepoStatsBoxItemComponent
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(RepoStatsBoxItemComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    describe('layout', () => {
      describe('as child', () => {
        it('requires implementation');
      });
      describe('as host', () => {
        it('requires implementation');
      });
    });

    describe('methods', () => {
      it('requires implementation');
    });

  });
});
