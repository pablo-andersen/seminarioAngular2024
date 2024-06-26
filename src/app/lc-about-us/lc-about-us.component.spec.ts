import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAboutUsComponent } from './lc-about-us.component';

describe('LcAboutUsComponent', () => {
  let component: LcAboutUsComponent;
  let fixture: ComponentFixture<LcAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LcAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
