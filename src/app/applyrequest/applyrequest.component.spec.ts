import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyrequestComponent } from './applyrequest.component';

describe('ApplyrequestComponent', () => {
  let component: ApplyrequestComponent;
  let fixture: ComponentFixture<ApplyrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
