import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursectionComponent } from './TourSection.component';

describe('ToursectionComponent', () => {
  let component: ToursectionComponent;
  let fixture: ComponentFixture<ToursectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
