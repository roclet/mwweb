import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTwoComponent } from './Header-Two.component';

describe('HeaderTwoComponent', () => {
  let component: HeaderTwoComponent;
  let fixture: ComponentFixture<HeaderTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
