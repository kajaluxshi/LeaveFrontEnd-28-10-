import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryForwadRequestComponent } from './carry-forwad-request.component';

describe('CarryForwadRequestComponent', () => {
  let component: CarryForwadRequestComponent;
  let fixture: ComponentFixture<CarryForwadRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryForwadRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryForwadRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
