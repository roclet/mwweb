import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSignInComponent } from './CommonSignIn.component';

describe('CommonSignInComponent', () => {
  let component: CommonSignInComponent;
  let fixture: ComponentFixture<CommonSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
