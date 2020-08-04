import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiontourComponent } from './DescriptionTour.component';

describe('DescriptiontourComponent', () => {
  let component: DescriptiontourComponent;
  let fixture: ComponentFixture<DescriptiontourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptiontourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptiontourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
