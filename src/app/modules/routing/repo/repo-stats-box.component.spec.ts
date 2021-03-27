import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { Component, Input, DebugElement } from '@angular/core';
import { Repository } from 'src/app/modal';
import { By } from '@angular/platform-browser';
import { RepoStatsBoxComponent } from './repo-stats-box.component';

// tslint:disable:component-selector
// tslint:disable:directive-selector
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
export class TestParentComponent {
}

// tslint:enable:component-selector
// tslint:enable:directive-selector
describe('modules/routing/repo/repo-stats-box.component', () => {
  describe('RepoStatsBoxComponent', () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
        ],
        declarations: [
          TestRepoStatsBoxItemComponent,
          RepoStatsBoxComponent,
          TestParentComponent
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(RepoStatsBoxComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    describe('layout', () => {
      it('needs work');
    });

    describe('methods', () => {
      let fixture: ComponentFixture<RepoStatsBoxComponent>;
      let testComponent: RepoStatsBoxComponent;
      beforeEach(() => {
        fixture = TestBed.createComponent(RepoStatsBoxComponent);
        testComponent = fixture.componentInstance;
      });
      describe('starCount', () => {
        describe('getter', () => {
          it('should return 0 if no repository is set', () => {
            testComponent.repository = undefined;
            expect(testComponent.starCount).toEqual(0);
          });
          it('should return 0 if "stargazers_count" property is not set', () => {
            testComponent.repository = {} as any;
            expect(testComponent.starCount).toEqual(0);
          });
          it('should return the stargazers_count property value', () => {
            testComponent.repository = {
              stargazers_count: 20
            } as any;
            expect(testComponent.starCount).toEqual(20);
          });
        });

      });
    });

  });

});
