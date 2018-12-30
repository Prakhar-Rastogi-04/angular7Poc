import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureGallaryComponent } from './picture-gallary.component';

describe('PictureGallaryComponent', () => {
  let component: PictureGallaryComponent;
  let fixture: ComponentFixture<PictureGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
