import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ObjectTreeComponent } from './object-tree.component';

describe('modules/common/object-tree/object-tree-item.component', () => {
  describe('ObjectTreeItemComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          ObjectTreeComponent
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(ObjectTreeComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

  });
});
