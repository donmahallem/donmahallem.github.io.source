/*!
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */

import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// tslint:disable:component-selector
// tslint:disable:directive-selector
@Component({
  selector: 'mat-toolbar',
  template: '',
})
export class TestMatToolbarComponent { }
// tslint:enable:component-selector
// tslint:enable:directive-selector
describe('app.component', (): void => {
  describe('AppComponent', (): void => {
    beforeEach(waitForAsync((): void => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          TestMatToolbarComponent,
        ],
        imports: [
          RouterTestingModule,
        ],
      }).compileComponents();
    }));

    it('should create the app', (): void => {
      const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
      const app: AppComponent = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

  });
});
