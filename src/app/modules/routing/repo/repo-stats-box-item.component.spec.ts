/*
 * Package @donmahallem/github-page
 * Source https://donmahallem.github.io/donmahallem.github.io.source/
 */


import { Component, DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RepoStatsBoxItemComponent } from './repo-stats-box-item.component';

// tslint:disable:component-selector
// tslint:disable:directive-selector
// tslint:disable:max-classes-per-file
@Component({
  selector: 'mat-icon',
  template: '',
})
export class TestMatIconComponent { }
@Component({
  template: '<app-repo-stats-box-item [icon]="useIcon">{{content}}</app-repo-stats-box-item>',
})
export class TestParentComponent {
  public useIcon: string;
  public content: string;
}

// tslint:enable:component-selector
// tslint:enable:directive-selector
// tslint:enable:max-classes-per-file
describe('modules/routing/repo/repo-stats-box-item.component', (): void => {
  describe('RepoStatsBoxItemComponent', (): void => {
    beforeEach(waitForAsync((): void => {
      TestBed.configureTestingModule({
        declarations: [
          TestMatIconComponent,
          RepoStatsBoxItemComponent,
          TestParentComponent,
        ],
        imports: [
        ],
      }).compileComponents();
    }));

    it('should create the app', (): void => {
      const fixture: ComponentFixture<RepoStatsBoxItemComponent> = TestBed.createComponent(RepoStatsBoxItemComponent);
      const app: RepoStatsBoxItemComponent = fixture.debugElement.componentInstance as RepoStatsBoxItemComponent;
      expect(app).toBeTruthy();
    });

    describe('layout', (): void => {
      let parentFixture: ComponentFixture<TestParentComponent>;
      let testComponent: TestParentComponent;
      let testChild: RepoStatsBoxItemComponent;
      let testChildDebugElement: DebugElement;
      beforeEach((): void => {
        parentFixture = TestBed.createComponent(TestParentComponent);
        testComponent = parentFixture.debugElement.componentInstance as TestParentComponent;
        testChildDebugElement = parentFixture.debugElement.query(By.directive(RepoStatsBoxItemComponent));
        testChild = testChildDebugElement.componentInstance as RepoStatsBoxItemComponent;
      });
      ['star', 'home'].forEach((testText: string): void => {
        it(`it should display "${testText}"`, (): void => {
          testComponent.useIcon = testText;
          testComponent.content = testText;
          parentFixture.detectChanges();
          expect(testChild.icon).toEqual(testText);
          expect((testChildDebugElement.nativeElement as HTMLElement).textContent.trim()).toEqual(testText);
        });
      });
    });
  });

});
