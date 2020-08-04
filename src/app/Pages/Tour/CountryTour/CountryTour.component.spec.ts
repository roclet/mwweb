import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountrytourComponent } from './CountryTour.component';


describe('CountrytourComponent', () => {
  let component: CountrytourComponent;
  let fixture: ComponentFixture<CountrytourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrytourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrytourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
