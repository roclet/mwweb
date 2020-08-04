import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcartComponent } from './AddCart.component';

describe('AddcartComponent', () => {
  let component: AddcartComponent;
  let fixture: ComponentFixture<AddcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
