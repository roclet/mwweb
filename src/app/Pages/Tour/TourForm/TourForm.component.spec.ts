import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourformComponent } from './TourForm.component';

describe('TourformComponent', () => {
  let component: TourformComponent;
  let fixture: ComponentFixture<TourformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
