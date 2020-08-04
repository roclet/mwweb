import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursdestinationComponent } from './ToursDestination.component';

describe('ToursdestinationComponent', () => {
  let component: ToursdestinationComponent;
  let fixture: ComponentFixture<ToursdestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursdestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursdestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
