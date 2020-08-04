import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletourComponent } from './SingleTour.component';

describe('SingletourComponent', () => {
  let component: SingletourComponent;
  let fixture: ComponentFixture<SingletourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
