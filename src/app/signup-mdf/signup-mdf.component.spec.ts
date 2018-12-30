import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMdfComponent } from './signup-mdf.component';

describe('SignupMdfComponent', () => {
  let component: SignupMdfComponent;
  let fixture: ComponentFixture<SignupMdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupMdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
