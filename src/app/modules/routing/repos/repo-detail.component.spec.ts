import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RepoDetailComponent } from './repo-detail.component';

describe('modules/routing/repos/repo-detail.component', () => {
  describe('RepoDetailComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          RepoDetailComponent
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
