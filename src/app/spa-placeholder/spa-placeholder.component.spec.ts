import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaPlaceholderComponent } from './spa-placeholder.component';

describe('SpaPlaceholderComponent', () => {
  let component: SpaPlaceholderComponent;
  let fixture: ComponentFixture<SpaPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
