import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurtrustedpartnersComponent } from './OurtrustedPartners.component';

describe('OurtrustedpartnersComponent', () => {
  let component: OurtrustedpartnersComponent;
  let fixture: ComponentFixture<OurtrustedpartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurtrustedpartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurtrustedpartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
