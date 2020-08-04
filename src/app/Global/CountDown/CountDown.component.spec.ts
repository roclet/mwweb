import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoountdownComponent } from './coountdown.component';

describe('CoountdownComponent', () => {
  let component: CoountdownComponent;
  let fixture: ComponentFixture<CoountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
