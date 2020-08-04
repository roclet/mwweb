import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativetourComponent } from './RelativeTour.component';

describe('RelativetourComponent', () => {
  let component: RelativetourComponent;
  let fixture: ComponentFixture<RelativetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
