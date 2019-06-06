import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ObjectTreeItemComponent } from './object-tree-item.component';

describe('modules/common/object-tree/object-tree-item.component', () => {
  describe('ObjectTreeItemComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          ObjectTreeItemComponent
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(ObjectTreeItemComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

  });
});
