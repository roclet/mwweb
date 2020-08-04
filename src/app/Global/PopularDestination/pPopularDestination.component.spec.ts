import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulardestinationComponent } from './PopularDestination.component';

describe('PopulardestinationComponent', () => {
  let component: PopulardestinationComponent;
  let fixture: ComponentFixture<PopulardestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulardestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulardestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
