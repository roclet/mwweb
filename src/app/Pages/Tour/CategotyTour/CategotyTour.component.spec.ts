import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategotytourComponent } from './CategotyTour.component';

describe('CategotytourComponent', () => {
  let component: CategotytourComponent;
  let fixture: ComponentFixture<CategotytourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategotytourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategotytourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
