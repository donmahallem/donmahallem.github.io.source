import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

// tslint:disable:component-selector
// tslint:disable:directive-selector
@Component({
  selector: 'mat-toolbar',
  template: '',
})
export class TestMatToolbarComponent { }
// tslint:enable:component-selector
// tslint:enable:directive-selector
describe('app.component', () => {
  describe('AppComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          AppComponent,
          TestMatToolbarComponent
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

  });
});
