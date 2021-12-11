/*
 * Package @donmahallem/github-page
 * Source https://github.com/donmahallem/donmahallem.github.io.source
 */


import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('home.component', (): void => {
  describe('HomeComponent', (): void => {
    beforeEach(waitForAsync((): void => {
      TestBed.configureTestingModule({
        declarations: [
          HomeComponent,
        ],
        imports: [
          RouterTestingModule,
        ],
      }).compileComponents();
    }));

    it('should create the app', (): void => {
      const fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
      const app: HomeComponent = fixture.debugElement.componentInstance as HomeComponent;
      expect(app).toBeTruthy();
    });

  });
});
