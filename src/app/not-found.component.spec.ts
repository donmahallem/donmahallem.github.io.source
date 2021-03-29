/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundComponent } from './not-found.component';

describe('not-found.component', (): void => {
  describe('NotFoundComponent', (): void => {
    beforeEach(waitForAsync((): void => {
      TestBed.configureTestingModule({
        declarations: [
          NotFoundComponent,
        ],
        imports: [
          RouterTestingModule,
        ],
      }).compileComponents();
    }));

    it('should create the app', (): void => {
      const fixture: ComponentFixture<NotFoundComponent> = TestBed.createComponent(NotFoundComponent);
      const app: NotFoundComponent = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

  });
});
