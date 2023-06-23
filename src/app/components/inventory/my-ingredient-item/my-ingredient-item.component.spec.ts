import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIngredientItemComponent } from './my-ingredient-item.component';

describe('MyIngredientItemComponent', () => {
  let component: MyIngredientItemComponent;
  let fixture: ComponentFixture<MyIngredientItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIngredientItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIngredientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
