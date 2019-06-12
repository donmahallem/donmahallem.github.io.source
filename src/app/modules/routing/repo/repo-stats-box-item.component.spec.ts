import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component, Input, DebugElement } from '@angular/core';
import { Repository } from 'src/app/modal';
import { RepoStatsBoxItemComponent } from './repo-stats-box-item.component';
import { By } from '@angular/platform-browser';

// tslint:disable:component-selector
// tslint:disable:directive-selector
@Component({
  selector: 'mat-icon',
  template: '',
})
export class TestMatIconComponent {
  @Input()
  public fontSet: string;
  @Input()
  public fontIcon: string;
}
@Component({
  template: '<app-repo-stats-box-item [icon]="useIcon">{{content}}</app-repo-stats-box-item>',
})
export class TestParentComponent {
  public useIcon: string;
  public content: string;
}

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
          RepoStatsBoxItemComponent,
          TestParentComponent
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(RepoStatsBoxItemComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    describe('layout', () => {
      let parentFixture: ComponentFixture<TestParentComponent>;
      let testComponent: TestParentComponent;
      let testChild: RepoStatsBoxItemComponent;
      let testChildDebugElement: DebugElement;
      let matIcon: TestMatIconComponent;
      let matIconFixture: DebugElement;
      beforeEach(() => {
        parentFixture = TestBed.createComponent(TestParentComponent);
        testComponent = parentFixture.debugElement.componentInstance;
        testChildDebugElement = parentFixture.debugElement.query(By.directive(RepoStatsBoxItemComponent));
        testChild = testChildDebugElement.componentInstance;
        matIconFixture = testChildDebugElement.query(By.directive(TestMatIconComponent));
        matIcon = matIconFixture.componentInstance;
      });
      ['star', 'home'].forEach((testText: string) => {
        it('it should display "' + testText + '"', () => {
          testComponent.useIcon = testText;
          testComponent.content = testText;
          parentFixture.detectChanges();
          expect(testChild.icon).toEqual(testText);
          expect(testChildDebugElement.nativeElement.textContent.trim()).toEqual(testText);
          expect(matIcon.fontIcon).toEqual(testText);
        });
      });
    });
  });

});
