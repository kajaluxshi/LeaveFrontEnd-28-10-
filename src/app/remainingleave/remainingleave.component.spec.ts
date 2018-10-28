import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingleaveComponent } from './remainingleave.component';

describe('RemainingleaveComponent', () => {
  let component: RemainingleaveComponent;
  let fixture: ComponentFixture<RemainingleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
