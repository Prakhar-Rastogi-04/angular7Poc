import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTdfComponent } from './login-tdf.component';

describe('LoginTdfComponent', () => {
  let component: LoginTdfComponent;
  let fixture: ComponentFixture<LoginTdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
